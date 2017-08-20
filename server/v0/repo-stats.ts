import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import config from '../../config'
import { GithubStatsProvider } from '../providers/github-stats-provider'
import * as Queue from 'bull'

let repoStatsQueue = new Queue('repo-stats', config.queueServer)

const githubStatsProvider = new GithubStatsProvider()

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        if (req.query.owner && req.query.repo) {
            let results = await githubStatsProvider.getRepoStats({
                owner: req.query.owner,
                repo: req.query.repo
            })

            return res.json(results)
        }
        else if (req.query.repos) {
            // TODO: validate repos
            let repos = JSON.parse(req.query.repos)
            let stats = await githubStatsProvider.getMultipleRepoStats(repos)
            return res.json(stats)           
        }
        else
            throw('Invalid params')
    } catch(e) {
        res.json({ error: e})
    }
})



router.get('/:owner/:repo', async (req, res) => {
    try {
        let stats = await githubStatsProvider.getRepoStats({
            owner: req.params.owner,
            repo: req.params.repo
        })
        res.json(stats)
    } catch(e) {
        res.json({ error: e})
    }
})

export default router