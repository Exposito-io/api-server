import * as express from 'express'
import wallets from './wallets'
import periodicPayments from './periodic-payments'
import instances from './instances'
import organizations from './organizations'
import projects from './projects'
import repoStats from './repo-stats'
import tokens from './tokens'
import * as auth from '../authentication'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'


const router = express.Router()

router.get('/', (req, res) => res.json({}))
router.use('/instances', auth.hasAccess, instances)
router.use('/periodic-payments', auth.hasAccess, periodicPayments)
router.use('/projects', auth.hasAccess, projects)
router.use('/organizations', auth.hasAccess, organizations)
router.use('/repo-stats', auth.hasAccess, repoStats)
router.use('/tokens', auth.hasAccess, tokens)
router.use('/wallets', auth.hasAccess, wallets)




export = router
