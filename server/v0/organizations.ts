import * as express from 'express'
import config from '../../config'
import { OrganizationProvider } from '../providers'
import { CreateOrganizationParams } from 'models'

const organizationProvider = new OrganizationProvider()

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let organizations = await organizationProvider.getUserOrganizations(req.user.id)
        res.json(organizations)

    } catch(e) {
        res.json({ error: e})
    }
})


router.post('/', async (req, res) => {
    try {

        let organization = await organizationProvider.createOrganization({
            name: req.body.name,
            description: req.body.description,
            members: [{
                userId: req.user.id,
                roles: []
            }]
        })

        res.json(organization)

    } catch(e) {
        res.json({ error: e})
    }
})

export default router