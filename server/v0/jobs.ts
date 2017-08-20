import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import config from '../../config'
import * as Queue from 'bull'

let repoStatsQueue = new Queue('repo-stats', config.queueServer)



export default function jobs(io) {
    /*
    repoStatsQueue.on('global:completed', function(job, result){
        console.log('Job completed!: ', job)
    })*/

    const router = express.Router()
    
    io.on('connection', function(client){
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

            res.json({ success: 2 }) 

        } catch(e) {
            res.json({ error: e})
        }
    })


    router.get('/new', async (req, res) => {
        try {
            let job = await repoStatsQueue.add({ owner: 'mathew', repo: req.query.name })
            console.log('starting job')
            /*
            repoStatsQueue.on('completed', function(job, result){
                console.log('Job completed!: ', job)
            })  */          

            res.json({ success: 2 }) 

        } catch(e) {
            res.json({ error: e})
        }
    })

    router.get('/process', async (req, res) => {
        try {

            repoStatsQueue.process((job, done) => {
                console.log('processing job: ')
                console.log(job.data.name)
                //job.progress(100)
                done()
            })      

            res.json({ success: 2 }) 

        } catch(e) {
            res.json({ error: e})
        }
    })

    return router
}

