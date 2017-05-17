import * as express from 'express'
import wallets from './wallets'
//import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'


const router = express.Router()

router.get('/', (req, res) => res.json({}))
router.use('/wallets', wallets)




export = router
