import * as express from 'express'
import wallets from './wallets'
import { BitcoinCoreWallet } from '../../models/core/bitcoin-core-wallet'


const router = express.Router()

router.get('/', (req, res) => res.json({}))
router.use('/wallets', wallets)


/*
let w = new CoreWallet({ 
    name: 'afwe', 
    m: 1, 
    n: 2, 
    singleAddress: true, 
    pubKey: '', 
    network: 'fwaefew' 
})*/



export = router
