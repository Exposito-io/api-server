import * as express from 'express'
import config from '../../config'
import { ProjectProvider } from '../providers'
import { CreateOrganizationParams } from 'models'

const projectProvider = new ProjectProvider()

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let projects = await projectProvider.getUserProjects(req.user.id)
        res.json(projects)

    } catch(e) {
        res.json({ error: e })
    }
})


router.get('/:id', async (req, res) => {
    try {
        let project = await projectProvider.getProjectById(req.params.id)
        res.json(project)

    } catch(e) {
        res.json({ error: e })
    }
})


router.post('/', async (req, res) => {
    try {

        let project = await projectProvider.createProject({
            name: req.body.name,
            description: req.body.description,
            members: [{
                userId: req.user.id,
                roles: []
            }]
        })

        res.json(project)

    } catch(e) {
        res.json({ error: e })
    }
})

export default router