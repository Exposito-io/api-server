import * as express from 'express'
import CoreWallet from '../../models/core/wallet'


const router = express.Router()

router.get('/', (req, res) => res.json({}))




let w = new CoreWallet({ 
    name: 'afwe', 
    m: 1, 
    n: 2, 
    singleAddress: true, 
    pubKey: '', 
    network: 'fwaefew' 
})



export = router
