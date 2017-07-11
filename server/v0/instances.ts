import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'

import * as _ from 'lodash'
import config from '../../config'
import {  } from 'models'
import * as gcloudCompute from '@google-cloud/compute'
import { GoogleInstanceProvider } from '../providers/hostings/google-cloud/google-instance-provider'

const instanceProvider = new GoogleInstanceProvider()
const router = express.Router()

const gce = gcloudCompute({
  projectId: 'quantal-152414',
  keyFilename: '/home/mathew/workspace/Exposito/secrets/google-compute.json',
  promise: Promise
})



router.get('/', async (req, res) => {
    try {
        var zone = gce.zone('us-central1-a')
        var name = 'ubuntu-http'
    } catch(e) {
        res.json({ error: e})
    }
})

router.post('/', async (req, res) => {
    try {
        var zone = gce.zone(req.body.zone)

        let instance = await instanceProvider.createInstance({
            name: req.body.name,
            description: req.body.description,
            zone: req.body.zone,
            machineType: req.body.machineType,
            organizationId: req.body.organizationId,
            hostingType: req.body.hostingType,
            labels: req.body.labels
        })

        res.json(instance)

    } catch(e) {
        res.json({ error: e})
    }
})


/*
router.post('/', async (req, res) => {
    try {
        var zone = gce.zone(req.body.zone)
        var name = req.body.name

        zone.createVM(req.body.name, { 
            machineType: 'f1-micro',
            os: 'ubuntu'
            //resource: { }
        })
        .then(data => {
            var vm = data[0]
            var operation = data[1]
            
            //return operation.promise()
            return res.json(vm)
        })
        .catch(err => {
            res.json({ error: err })
        })
        .then(function() {
            // Virtual machine created! 
        })   
    } catch(e) {
        res.json({ error: e})
    }
})
*/


export default router