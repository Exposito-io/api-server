import * as express from 'express'
import wallets from './wallets'
import periodicPayments from './periodic-payments'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'


const router = express.Router()

router.get('/', (req, res) => res.json({}))
router.use('/wallets', wallets)
router.use('/periodic-payments', periodicPayments)




export = router
