import * as express from 'express'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import * as config from 'config'
import { GithubStatsProvider } from '../providers/github-stats-provider'

const githubStatsProvider = new GithubStatsProvider()

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let stats = await githubStatsProvider.getRepoStats({
            owner: req.query.owner,
            repo: req.query.repo
        })
        res.json(stats)
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