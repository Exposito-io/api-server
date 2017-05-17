import * as express from 'express'
import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import * as config from 'config'


const router = express.Router()

//router.get('/', (req, res) => res.json({ wallet: 'awefweaf'}))

router.get('/', (req, res) => {
    CoreClient.getClient({ host: config.get('coreWalletServiceHost'), file: 'C:\\weblog\\.wallet.dat' }, { doNotComplete: true }, client => {

        client.seedFromRandomWithMnemonic({
            network: config.get("bitcoinNetwork"),
            passphrase: undefined,
            language: 'en',
        })
        
        client.createWallet('testname', 'copayer1', 1, 2, {
            network: config.get("bitcoinNetwork")
        }, function(err, secret) {
            if (err) {
                console.log('Error : ', err)
            }
            console.log(' * ' + _.capitalize(<string>config.get('bitcoinNetwork')) + ' Wallet Created.')
            CoreClient.saveClient({ host: config.get('coreWalletServiceHost'), file: 'C:\\weblog\\.wallet.dat' }, client, function() {
                if (secret) 
                    console.log('   - Secret to share:\n\t' + secret)
            
            })
        })        
    })
})


export default router