import * as express from 'express'
import CoreWallet from '../../models/core/wallet'


const router = express.Router()

router.get('/', (req, res) => res.json({ wallet: 'awefweaf'}))


export default router