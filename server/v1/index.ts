import * as express from 'express'
import wallets from './wallets'
import periodicPayments from './periodic-payments'
import instances from './instances'
import repoStats from './repo-stats'
import tokens from './tokens'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'


const router = express.Router()

router.get('/', (req, res) => res.json({}))
router.use('/wallets', wallets)
router.use('/periodic-payments', periodicPayments)
router.use('/repo-stats', repoStats)
router.use('/tokens', tokens)




export = router
