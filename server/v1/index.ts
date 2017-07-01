import * as express from 'express'
import wallets from './wallets'
import periodicPayments from './periodic-payments'
import instances from './instances'
import repoStats from './repo-stats'
import tokens from './tokens'
import * as auth from '../authentication'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'


const router = express.Router()

router.get('/', (req, res) => res.json({}))
router.use('/wallets', auth.hasAccess, wallets)
router.use('/periodic-payments', auth.hasAccess, periodicPayments)
router.use('/repo-stats', auth.hasAccess, repoStats)
router.use('/tokens', auth.hasAccess, tokens)




export = router
