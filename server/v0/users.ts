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
        let user = await provider.findById(req.user.id)
        res.json(user)
    } catch(e) {
        res.json({ error: e})
    }
})

router.get('/selectedProject', async (req, res) => {
    try {
        res.json(await provider.getSelectedProject(req.user.id))
    } catch(e) {
        res.json({ error: e})
    }
})

router.get('/preferences', async (req, res) => {
    try {
        res.json(await provider.getPreferences(req.user.id))
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

router.get('/:id/selectedProject', async (req, res) => {
    try {
        if (!checkAccess(req.user.id, req.params.id))
            throw('Wrong access')

        res.json(await provider.getSelectedProject(req.params.id))
    } catch(e) {
        res.json({ error: e})
    }
})

router.get('/:id/preferences', async (req, res) => {
    try {
        if (!checkAccess(req.user.id, req.params.id))
            throw('Wrong access')

        res.json(await provider.getPreferences(req.params.id))
    } catch(e) {
        res.json({ error: e})
    }
})



function checkAccess(userId: string, requestedUserId: string) {
    return userId === requestedUserId
}





export default router