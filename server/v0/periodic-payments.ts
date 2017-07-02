import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import { WalletProvider, PeriodicPaymentProvider, UserProvider } from '../providers'
import { FixedPayment } from 'models'

const walletProvider = new WalletProvider()
const paymentProvider = new PeriodicPaymentProvider()
const userProvider = new UserProvider()

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        if (!(await userProvider.validateUsersBelongToOrganization(req.query.organizationId, [req.user.id])))
            throw "User doesn't belong to organization"

        let periodicPayments = await paymentProvider.getPeriodicPayments({
            organizationId: req.query.organizationId
        })
        res.json({
            periodicPayments
        })
    } catch(e) {
        res.json({ error: e})
    }
})

router.post('/', async (req, res) => {
    try {
        let periodicPayment = await paymentProvider.createPeriodicPayment({
            schedule: req.body.schedule,
            organizationId: req.body.organizationId,
            sourceWalletId: req.body.sourceWalletId,

            destination: req.body.destination,
            destinationType: new Number(req.body.destinationType).valueOf(),

            amount: req.body.amount,
            currency: req.body.currency,

            amountFunction: req.body.amountFunction,
            amountFunctionFile: req.body.amountFunctionFile,

            payments: req.body.payments,

            isPaused: req.body.isPaused
        })

        res.json(periodicPayment)

    } catch(e) {
        res.json({ error: e })
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

router.post('/fixed', async (req, res) => {
    try {
        let periodicPayment = await paymentProvider.createFixedPeriodicPayment({
            sourceWalletId: req.body.sourceWalletId,
            destination: req.body.destination,
            destinationType: req.body.destinationType,
            amount: req.body.amount,
            currency: req.body.currency,
            schedule: req.body.schedule
        })

        res.json(periodicPayment)

    } catch(e) {
        res.json({ error: e })
    }
})


export default router