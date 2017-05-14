import * as express from 'express'
import * as homepage from './homepage'

const router = express.Router()

router.get('/', homepage.controller)





export = router
