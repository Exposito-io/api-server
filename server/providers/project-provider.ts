import { Project, CreateProjectParams, ExpositoError, ErrorCode } from 'models'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { ObjectID, Collection } from 'mongodb'
import { convertObjectIdsToStrings, convertStringsToObjectIds } from '../lib/convert-object-ids'


export class ProjectProvider {


    constructor() {
        
    }


    async createProject(params: CreateProjectParams): Promise<Project> {
        let project = Project.fromParams(params) as any

        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('projects') as Collection

        project.members = project.members.map(member => {
            member.userId = new ObjectID(member.userId)
            return member
        })

        let results = await col.insertOne(project)

        if (results.insertedCount === 1) {
            project.id = results.insertedId.toHexString()
            return project
        }
        else
            throw 'Error while creating organization'

    }

    async getProjectById(projectId: string): Promise<Project> {
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('projects') as Collection

        let project = await col.findOne({ _id: new ObjectID(projectId) })

        return Project.fromJSON(project)
    }

    async getUserProjects(userId: string): Promise<Project[]> {
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('projects') as Collection

        let projects = await col.find({ 'members.userId': new ObjectID(userId) }).toArray()

        return projects.map(org => Project.fromJSON(org))
    }

}