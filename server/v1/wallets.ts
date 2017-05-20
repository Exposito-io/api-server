import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import * as config from 'config'
import { WalletProvider } from '../providers/wallet-provider'

const walletProvider = new WalletProvider()
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let wallets = await walletProvider.fetchWalletsForClients([])
        res.json({ 
            wallets: wallets.map(wallet => { 
                return {
                    id: wallet.getId(), 
                    name: wallet.getName(), 
                    labels: wallet.getLabels() 
                }
            })
        })
    } catch(e) {
        res.json({ error: e})
    }
})

router.post('/', async (req, res) => {
    try {
        if (!validateWalletName(req.body.name))
            res.json({ error: 'Invalid wallet name'})

        let walletName = req.body.name

        let client = await CoreClient.getClient()

        client.seedFromRandomWithMnemonic({
            network: config.get("bitcoinNetwork"),
            passphrase: undefined,
            language: 'en',
        })

        client.createWallet(walletName, 'copayer1', 1, 1, {
            network: config.get("bitcoinNetwork")
        }, function(err, secret) {
            
            if (err) 
                console.log('Error : ', err)
            
            console.log(' * ' + _.capitalize(config.get('bitcoinNetwork') as string) + ' Wallet Created.')
            CoreClient.saveClient({ host: config.get('coreWalletServiceHost'), file: 'C:\\weblog\\.wallet.dat' }, client, function() {
                if (secret) 
                    console.log('   - Secret to share:\n\t' + secret)
                res.json({ success: 1 })
            })
        })        
        
    } catch(e) {
        res.json({ error: e })
    }
})


router.get('/:id', async (req, res) => {
    try {
        let wallet = await walletProvider.fetchById(req.params.id)

        res.json(wallet.toFrontendJSON())

    } catch(e) {
        res.json({ error: e})
    }
})

router.get('/:id/addresses', async (req, res) => {
    try {
        let client = await CoreClient.getClient(req.params.id)
        client.getMainAddresses({
            doNotVerify: true
        }, function(err, x) {
            if (err) throw(err)

            res.json({ res: x.map(add => add.address) })

        });
    } catch(e) {
        res.json({ error: e})
    }
})



router.get('/:id/balance', async (req, res) => {
    try {
        let client = await CoreClient.getClient(req.params.id)

        client.getStatus({}, function(err, status) {
            if (err) throw(err)

            res.json({
                balance: CoreClient.renderAmount(status.balance.totalAmount),
                locked: CoreClient.renderAmount(status.balance.lockedAmount)
            })

        })
    } catch(e) {
        res.json({ error: e})
    }
})




router.post('/:id/address', async (req, res) => {
    try {
        let client = await CoreClient.getClient(req.params.id)
        client.createAddress({}, function(err, x) {
            if (err) throw(err)

            res.json({ res: x.address })
        })
    } catch(e) {
        res.json({ error: e})
    }
})


router.post('/:id/send', async (req, res) => {
    try {
        let client = await CoreClient.getClient(req.params.id)
        let amount = CoreClient.parseAmount(req.body.amount)
        let feePerKb = !_.isUndefined(req.body.fee) ? CoreClient.parseAmount(req.body.fee) : 100e2
        let address = req.body.address
        let note = req.body.note || ''

        client.createTxProposal({
            outputs: [{
            toAddress: address,
            amount: amount,
            }],
            message: note,
            feePerKb: feePerKb,
        }, function(err, txp) {
            if (err) throw(err)

            client.publishTxProposal({
                txp: txp
            }, function(err) {
                if (err) throw(err)

                //res.json({ tid: CoreClient.shortID(txp.id) })
                let txpid = CoreClient.shortID(txp.id)

                client.getTxProposals({}, function(err, txps) {
                    if (err) throw(err)

                    let txp = CoreClient.findOneTxProposal(txps, txpid)

                    client.signTxProposal(txp, function(err, tx) {
                        if (err) throw(err)

                        console.log('Transaction signed by you.')

                        client.broadcastTxProposal(txp, function(err, txp) {
                            if (err) throw(err)
                            console.log('Transaction Broadcasted: TXID: ' + txp.txid)
                            res.json({ success: true, txid: txp.txid })
                        })
                    })
                })
                /*
                console.log(' * Tx created: ID %s [%s] RequiredSignatures:',
                    CoreClient.shortID(txp.id), txp.status, txp.requiredSignatures);*/
            })
        });
    } catch (e) {
        res.json({ error: e})
    }
})




function validateWalletName(name: string) {
    return true
}


export default router