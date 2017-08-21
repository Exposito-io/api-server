import * as express from 'express'
import wallets from './wallets'
import periodicPayments from './periodic-payments'
import github from './github'
import instances from './instances'
import organizations from './organizations'
import projects from './projects'
import repoStats from './repo-stats'
import tokens from './tokens'
import jobs from './jobs'
import users from './users'
import * as auth from '../authentication'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'


export default function v0(io) {
    const router = express.Router()

    router.get('/', (req, res) => res.json({}))
    router.use('/github', auth.hasAccess, github)
    router.use('/instances', auth.hasAccess, instances)
    router.use('/jobs', auth.hasAccess, jobs(io))
    router.use('/periodic-payments', auth.hasAccess, periodicPayments)
    router.use('/projects', auth.hasAccess, projects)
    router.use('/organizations', auth.hasAccess, organizations)
    router.use('/repo-stats', auth.hasAccess, repoStats)
    router.use('/tokens', auth.hasAccess, tokens)
    router.use('/users', auth.hasAccess, users)
    router.use('/wallets', auth.hasAccess, wallets)

    return router
}


