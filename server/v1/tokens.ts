import * as express from 'express'
import * as config from 'config'
import { GithubStatsProvider } from '../providers/github-stats-provider'

const githubStatsProvider = new GithubStatsProvider()

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        if (req.query.owner && req.query.repo) {
            let stats = await githubStatsProvider.getRepoStats({
                owner: req.query.owner,
                repo: req.query.repo
            })
            return res.json(stats)
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