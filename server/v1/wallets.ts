import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import config from '../../config'
import { WalletProvider } from '../providers/wallet-provider'
import { PeriodicPaymentProvider } from '../providers/periodic-payment-provider'
import { TransactiontProvider } from '../providers/transaction-provider'
import { Money, FixedPayment, FixedPaymentOptions } from 'models'

const walletProvider = new WalletProvider()
const paymentProvider = new PeriodicPaymentProvider()
const transactionProvider = new TransactiontProvider()

const router = express.Router()

let m = Money.fromInteger(1, 'USD')


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
            network: config.bitcoinNetwork,
            passphrase: undefined,
            language: 'en',
        })

        let secret = await client.createWallet(walletName, 'copayer1', 1, 1, {
            network: config.bitcoinNetwork
        })


        console.log(' * ' + _.capitalize(config.bitcoinNetwork) + ' Wallet Created.')
        await CoreClient.saveClient({ host: config.coreWalletServiceHost, file: 'C:\\weblog\\.wallet.dat' }, client)

        if (secret)
            console.log('   - Secret to share:\n\t' + secret)

        res.json({ success: 1 })



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
        let x = await client.getMainAddresses({ doNotVerify: true })

        res.json({ res: x.map(add => add.address) })


    } catch(e) {
        res.json({ error: e})
    }
})



router.get('/:id/balance', async (req, res) => {
    try {

        let client = await CoreClient.getClient(req.params.id)
        let status = await client.getStatus({})

        res.json({
            balance: CoreClient.renderAmount(status.balance.totalAmount),
            locked: CoreClient.renderAmount(status.balance.lockedAmount)
        })

    } catch(e) {
        res.json({ error: e})
    }
})


/*
router.post('/:id/fixed-payment', async (req, res) => {
    try {
        await paymentProvider.createFixedPeriodicPayment({
            sourceWalletId: req.params.id,
            destinationWalletId: req.params.destinationWalletId,
            amount: req.body.amount,
            currency: req.body.currency,
            schedule: '1 * * * * *'            
        })
        res.json({ success: 1 })
    } catch (e) {
        res.json({ error: e })
    }
})*/


router.post('/:id/address', async (req, res) => {
    try {
        let client = await CoreClient.getClient(req.params.id)
        let x = await client.createAddress({})

        res.json({ res: x.address })

    } catch(e) {
        res.json({ error: e})
    }
})


router.post('/:id/send', async (req, res) => {
    try {
        let result = await transactionProvider.createPayment({
            sourceWalletId: req.params.id,
            destination: req.body.destination,
            destinationType: req.body.destinationType,
            amount: req.body.amount,
            currency: req.body.currency,
            note: req.body.note
        })

        res.json({ res: result })
    } catch(e) {
        res.json({ error: e })
    }

})




function validateWalletName(name: string) {
    return true
}


export default router