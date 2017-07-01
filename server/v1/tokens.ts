import * as express from 'express'
import * as config from 'config'
import { GithubStatsProvider } from '../providers/github-stats-provider'
import { TokenProvider } from '../providers/token-provider'
import * as auth from '../authentication'

const githubStatsProvider = new GithubStatsProvider()
const tokentProvider = new TokenProvider()

const router = express.Router()

router.get('/', auth.hasAccess, async (req, res) => {
    try {
        let token = await tokentProvider.generateToken({ userId: req.user.id })
        return res.json({ token: token })
    } catch(e) {
        res.json({ error: e})
    }
})


export default router