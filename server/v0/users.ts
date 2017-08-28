import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'

import * as _ from 'lodash'
import config from '../../config'
import {  } from 'models'
import { UserProvider } from '../providers/user-provider'


let provider = new UserProvider()

const router = express.Router()



router.get('/', async (req, res) => {
    try {
        res.json({  })
    } catch(e) {
        res.json({ error: e})
    }
})



router.get('/find', async (req, res) => {
    try {       
        console.log(`Finding for ${req.query.q}`)
        let users = await provider.find(req.query.q)
        res.json(users)
    } catch(e) {
        res.json({ error: e})
    }
})


router.get('/:id', async (req, res) => {
    try {
        let user = await provider.findById(req.params.id)
        res.json(user)
    } catch(e) {
        res.json({ error: e})
    }
})





export default router