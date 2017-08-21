import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import config from '../../config'
import * as Queue from 'bull'

let repoStatsQueue = new Queue('repo-stats', config.queueServer)

let availableJobs = {
    'repo-stats': new Queue('repo-stats', config.queueServer)
}





export default function jobs(io) {
    /*
    repoStatsQueue.on('global:completed', function(job, result){
        console.log('Job completed!: ', job)
    })*/

    const router = express.Router()
    let jobsIo = io.of('/jobs')
    
    jobsIo.on('connection', function(client) {
        client.jobCompleteListeners = []

        client.on('subscribe', data => {
            
            console.log('Subscribe')
            repoStatsQueue.on('global:completed', (job, result) => {
                console.log('job complete: ', job)
                client.emit('job-complete', { data: job.data, result })
            })

            

            console.log('data')
            console.log(data)
        })

        client.on('disconnect', () => {

            //repoStatsQueue.
            console.log('disconnected')
        })
    })
    

    router.get('/', async (req, res) => {
        try {

            res.json({ success: 1 }) 

        } catch(e) {
            res.json({ error: e})
        }
    })


    return router
}

