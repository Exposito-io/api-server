import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import config from '../../config'
import { WalletProvider } from '../providers/wallet-provider'
import { PeriodicPaymentProvider } from '../providers/periodic-payment-provider'
import { TransactiontProvider } from '../providers/transaction-provider'
import { UserProvider } from '../providers/user-provider'
import { Money, FixedPayment, FixedPaymentOptions } from 'models'

const walletProvider = new WalletProvider()
const paymentProvider = new PeriodicPaymentProvider()
const transactionProvider = new TransactiontProvider()
const userProvider = new UserProvider()

const router = express.Router()



router.get('/', async (req, res) => {
    try {
        let wallets = await walletProvider.fetchWalletsForClients([req.user.id])
        res.json({
            wallets: wallets.map(wallet => { 
                return {
                    id: wallet.id, 
                    name: wallet.name, 
                    labels: wallet.labels,
                    type: wallet.type,
                    amount: wallet.amount,
                    currency: wallet.currency
                }
            })
        })
    } catch(e) {
        res.json({ error: e})
    }
})


router.post('/', async (req, res) => {
    try {
        let result = await transactionProvider.createPaymentDemo({
            sourceWalletId: req.body.sourceWalletId,
            sourceType: req.body.sourceType,
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






function validateWalletName(name: string) {
    return true
}


export default router