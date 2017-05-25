import * as _ from 'lodash'
import * as url from 'url'
import * as read from 'read'
import * as log from 'npmlog'  
//import * as Client from 'bitcore-wallet-client'
import { Client } from 'core-bitcoin-client'
import FileStorage from './filestorage'
import * as sjcl from 'sjcl'
import { WalletProvider } from './providers/wallet-provider'
//import { BitcoinCoreWallet } from "../models/core/bitcoin-core-wallet";
import { Wallet, CryptoCurrency } from '../models/wallet'
import { BitcoinWallet } from '../models/bitcoin-wallet'
import * as config from 'config'
import { ObjectID } from 'mongodb'

var WALLET_ENCRYPTION_OPTS = {
  iter: 5000
}


let walletProvider = new WalletProvider()


class Utils {

    static parseMN(text) {
      if (!text) throw new Error('No m-n parameter')

      var regex = /^(\d+)(-|of|-of-)?(\d+)$/i
      var match = regex.exec(text.trim())

      if (!match || match.length === 0) throw new Error('Invalid m-n parameter')

      var m = parseInt(match[1])
      var n = parseInt(match[3])
      if (m > n) throw new Error('Invalid m-n parameter')

      return [m, n]
    }


    static shortID(id) {
      return id.substr(id.length - 4)
    }

    static confirmationId(copayer) {
      return parseInt(copayer.xPubKeySignature.substr(-4), 16).toString().substr(-4)
    }



    static async doLoad2(client, doNotComplete, walletData, password) {
      return new Promise((resolve, reject) => {

        if (password) {
          try {
            walletData = sjcl.decrypt(password, walletData)
          } catch (e) {
            //die('Could not open wallet. Wrong password.');
            return reject(e)
          }
        }

        try {
          client.import(walletData)
        } catch (e) {
          //die('Corrupt wallet file.');
        }
        if (doNotComplete) return resolve(client)


        client.on('walletCompleted', function(wallet) {
          /*
          Utils.doSave(client, filename, password, function() {
            console.log('Your wallet has just been completed. Please backup your wallet file or use the export command.')
          })*/
        })
        client.openWallet(function(err, isComplete) {
          if (err) return reject(err)

          return resolve(client)
        })
      })
    }


    static doLoad(client, doNotComplete, walletData, password, filename, cb) {
      if (password) {
        try {
          walletData = sjcl.decrypt(password, walletData)
        } catch (e) {
          //die('Could not open wallet. Wrong password.');
        }
      }

      try {
        client.import(walletData)
      } catch (e) {
        //die('Corrupt wallet file.');
      }
      if (doNotComplete) return cb(client)


      client.on('walletCompleted', function(wallet) {
        Utils.doSave(client, filename, password, function() {
          console.log('Your wallet has just been completed. Please backup your wallet file or use the export command.')
        })
      })
      client.openWallet(function(err, isComplete) {
        if (err) throw err

        return cb(client)
      })
    }

    static loadEncrypted(client, opts, walletData, filename, cb) {
      read({
        prompt: 'Enter password to decrypt:',
        silent: true
      }, function(er, password) {
        if (er) throw(er);
        if (!password) throw("no password given");

        return Utils.doLoad(client, opts.doNotComplete, walletData, password, filename, cb);
      });
    };

    static async getClient(walletId?: string|ObjectID) {

        let client = new Client({
            baseUrl: url.resolve(<string>config.get('coreWalletServiceHost'), '/bws/api')
        })

        if (walletId == null) {
          return client
        }
        else {
          let wallet = await walletProvider.fetchById(walletId)
          if (wallet.getType() === CryptoCurrency.BITCOIN) {
            let bitcoinWallet = wallet as BitcoinWallet
            let coreWallet = JSON.stringify(bitcoinWallet.getCoreWallet())
            return await Utils.doLoad2(client, false, coreWallet, null)
          }
          else {
            // TODO mcormier
          }
        }

    }

    static getSClient(args, opts, cb) {
      opts = opts || {}

      var filename = args.file || process.env['WALLET_FILE'] || process.env['HOME'] + '/.wallet.dat'
      var host = args.host || process.env['BWS_HOST'] || 'https://bws.bitpay.com/'

      var storage = new FileStorage({
        filename: filename,
      })

      var client = new Client({
        baseUrl: url.resolve(host, '/bws/api'),
        verbose: args.verbose,
      })

      storage.load(function(err, walletData) {
        if (err) {
          if (err.code == 'ENOENT') {
            if (opts.mustExist) 
              throw('File "' + filename + '" not found.')
            
          } else 
            throw(err)
          
        }

        if (walletData && opts.mustBeNew) {
          throw('File "' + filename + '" already exists.')
        }
        if (!walletData) return cb(client)

        var json
        try {
          json = JSON.parse(walletData)
        } catch (e) {
          throw('Invalid input file')
        }

        if (json.ct) {
          Utils.loadEncrypted(client, opts, walletData, filename, cb)
        } else {
          Utils.doLoad(client, opts.doNotComplete, walletData, null, filename, cb)
        }
      })
    }

    static doSave(client, filename, password, cb) {
      var opts = {};

      var str = client.export();
      if (password) {
        //str = sjcl.encrypt(password, str, WALLET_ENCRYPTION_OPTS);
        // TODO
      }

      let jsonCoreWallet = JSON.parse(str)
      //let wallet = BitcoinCoreWallet.fromObj(jsonCoreWallet)
      let wallet = jsonCoreWallet
      walletProvider.createWallet(new BitcoinWallet({ name: wallet.walletName, coreWallet: wallet, labels: [] }))
      .then(newWallet => {
        cb(null, newWallet)
      })

    };

    static saveEncrypted(client, filename, cb) {
      read({
        prompt: 'Enter password to encrypt:',
        silent: true
      }, function(er, password) {
        if (er) throw(er)
        if (!password) throw("no password given");
        read({
          prompt: 'Confirm password:',
          silent: true
        }, function(err, password2) {
          if (err) throw(err);
          if (password != password2)
            throw("passwords were not equal");

          Utils.doSave(client, filename, password, cb);
        })
      })
    }

    static async saveClient(args, client) {
      return new Promise((resolve, reject) => {
        let cb = err => {
          if (err) {
            return reject(err)
          }

          return resolve()
        }

        let filename = args.file || process.env['WALLET_FILE'] || process.env['HOME'] + '/.wallet.dat';
        console.log(' * Saving file', filename);

        if (args.password) {
          Utils.saveEncrypted(client, filename, cb);
        } else {
          Utils.doSave(client, filename, null, cb);
        }
      })
    }

    static findOneTxProposal(txps, id) {
      var matches = _.filter<any>(txps, function(tx) {
        return _.endsWith(Utils.shortID(tx.id), id);
      });

      if (!matches.length)
        throw('Could not find TX Proposal:' + id);

      if (matches.length > 1) {
        console.log('More than one TX Proposals match:' + id);
        Utils.renderTxProposals(txps);
        //program.exit(1);
      }

      return matches[0];
    };

    static UNITS = {
      'btc': 100000000,
      'bit': 100,
      'sat': 1,
    }

    static parseAmount(text) {
      if (!_.isString(text))
        text = text.toString();

      var regex = '^(\\d*(\\.\\d{0,8})?)\\s*(' + _.keys(Utils.UNITS).join('|') + ')?$';
      var match = new RegExp(regex, 'i').exec(text.trim());

      if (!match || match.length === 0) throw new Error('Invalid amount');

      var amount = parseFloat(match[1]);
      if (!_.isNumber(amount) || _.isNaN(amount)) throw new Error('Invalid amount');

      var unit = (match[3] || 'sat').toLowerCase();
      var rate = Utils.UNITS[unit];
      if (!rate) throw new Error('Invalid unit')

      var amountSat = parseFloat((amount * rate).toPrecision(12));
      if (amountSat != Math.round(amountSat)) throw new Error('Invalid amount');

      return amountSat;
    }

    static configureCommander(program) {
      program
        .version('0.0.1')
        .option('-f, --file <filename>', 'Wallet file')
        .option('-h, --host <host>', 'Bitcore Wallet Service URL (eg: http://localhost:3001/copay/api')
        .option('-v, --verbose', 'be verbose')

      return program;
    };

    static renderAmount(amount) {
      var unit = process.env.BIT_UNIT || 'bit';
      if (unit === 'SAT') {
        // Do nothing
      } else if (process.env.BIT_UNIT === 'btc') {
        amount = amount / 1e8;
      } else {
        amount = amount / 100;
      }
      amount = (parseFloat(amount.toPrecision(12)));
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ' + unit;
    }

    static renderTxProposals(txps) {
      if (_.isEmpty(txps))
        return;

      console.log("* TX Proposals:")

      _.each(txps, function(x) {
        var missingSignatures = x.requiredSignatures - _.filter(_.values<any>(x.actions), function(a) {
          return a.type == 'accept'
        }).length;
        console.log("\t%s [\"%s\" by %s] %s => %s", Utils.shortID(x.id), x.message, x.creatorName, Utils.renderAmount(x.amount), x.outputs[0].toAddress)

        if (!_.isEmpty(x.actions)) {
          console.log('\t\tActions: ', _.map<any, string>(x.actions, function(a) {
            return a.copayerName + ' ' + (a.type == 'accept' ? '✓' : '✗') + (a.comment ? ' (' + a.comment + ')' : '')
          }).join('. '))
        }
        if (missingSignatures > 0) {
          console.log('\t\tMissing signatures: ' + missingSignatures)
        } else {
          console.log('\t\tReady to broadcast')
        }
      });

    }

}

export default Utils