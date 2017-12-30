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
        if (!(await userProvider.validateProjectMembers(req.query.projectId, [req.user.id])))
            throw "User doesn't belong to project"

        let periodicPayments = await paymentProvider.getPeriodicPayments({
            projectId: req.query.projectId
        })
        res.json({
            periodicPayments
        })
    } catch(e) {
        res.json({ error: e})
    }
})

router.get('/byWallet/:walletId', async (req, res) => {
    try {
        // TODO: Validate wallet belongs to user

        let periodicPayments = await paymentProvider.getPeriodicPaymentsForWallet({
            walletId: req.params.walletId
        })
        res.json(periodicPayments)
    } catch(e) {
        res.json({ error: e})
    }
})


router.post('/', async (req, res) => {
    try {
        //if (!(await userProvider.validateProjectMembers(req.body.projectId, [req.user.id])))
        //    throw "User doesn't belong to project"

        let periodicPayment = await paymentProvider.createPeriodicPayment({
            schedule: req.body.schedule,
            projectId: req.body.projectId,
            sourceWalletId: req.body.sourceWalletId,

            description: req.body.description,

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

        if (!(await userProvider.validateUsersBelongToOrganization(periodicPayment.projectId, [req.user.id])))
            throw 'Invalid'
            
        res.json(periodicPayment)

    } catch(e) {
        res.json({ error: e})
    }
})

/*
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
})*/


export default router