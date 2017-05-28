import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import * as config from 'config'
import { WalletProvider } from '../providers/wallet-provider'
import { PeriodicPaymentProvider } from '../providers/periodic-payment-provider'
import { FixedPayment } from '../../models/fixed-payment'

const walletProvider = new WalletProvider()
const paymentProvider = new PeriodicPaymentProvider()

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let periodicPayments = await paymentProvider.fetchPeriodicPaymentForClients([])
        res.json({
            periodicPayments
        })
    } catch(e) {
        res.json({ error: e})
    }
})



router.get('/:id', async (req, res) => {
    try {
        let periodicPayment = await paymentProvider.fetchById(req.params.id)

        res.json(periodicPayment)

    } catch(e) {
        res.json({ error: e})
    }
})


export default router