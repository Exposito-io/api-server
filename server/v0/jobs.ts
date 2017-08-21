import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import { JobNotifier } from '../lib/job-notifier'
import * as _ from 'lodash'
import config from '../../config'




export default function jobs(io) {

    const router = express.Router()

    let jobNotifier = new JobNotifier(io)


    router.get('/', async (req, res) => {
        try {

            res.json({ success: 1 }) 

        } catch(e) {
            res.json({ error: e})
        }
    })


    return router
}

