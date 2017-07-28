import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import config from '../../config'
import * as Queue from 'bull'

let repoStatsQueue = new Queue('repo-stats', config.queueServer)

repoStatsQueue.on('completed', function(job, result){
    console.log('Job completed!: ', job)
})

export default function jobs(io) {

    const router = express.Router()
    /*
    io.on('connection', function(client){
        client.on('subscribe', data => {

            console.log('Subscribe')
            repoStatsQueue.on('completed', (job, result) => {
                console.log('job complete: ', job)
                client.emit('job-complete', { job, result })
            })

            

            console.log('data')
            console.log(data)
        })

        client.on('disconnect', () => {

            //repoStatsQueue.
            console.log('disconnected')
        })
    })
    */

    router.get('/', async (req, res) => {
        try {

            res.json({ success: 2 }) 

        } catch(e) {
            res.json({ error: e})
        }
    })


    router.get('/new', async (req, res) => {
        try {
            let job = await repoStatsQueue.add({ name: req.query.name })
            console.log('starting job')
            repoStatsQueue.on('completed', function(job, result){
                console.log('Job completed!: ', job)
            })            

            res.json({ success: 2 }) 

        } catch(e) {
            res.json({ error: e})
        }
    })

    return router
}
