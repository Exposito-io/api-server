import * as express from 'express'
import * as config from 'config'
import { GithubStatsProvider } from '../providers/github-stats-provider'
import { TokenProvider } from '../providers/token-provider'

const githubStatsProvider = new GithubStatsProvider()
const tokentProvider = new TokenProvider()

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let token = await tokentProvider.generateToken({ userId: 999 })
        return res.json({ token: token })
    } catch(e) {
        res.json({ error: e})
    }
})


export default router