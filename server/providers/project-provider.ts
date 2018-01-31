import { 
    Project, 
    CreateProjectParams, 
    ProjectTokenholdersDistribution, 
    GithubTokenholdersDescription,
    CreateProjectTokenholdersDistributionParams, 
    ExpositoError, 
    ErrorCode 
} from 'models'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { ObjectID, Collection } from 'mongodb'
import { convertObjectIdsToStrings, convertStringsToObjectIds } from '../lib/convert-object-ids'
import { createContract } from '../lib/ethereum-tools'
import BigNumber from 'bignumber.js'

import expositoProjectCompiled from '../../contracts/compiled/ExpositoProject'
import developerTokenCompiled from '../../contracts/compiled/DeveloperToken'

/**
 * Exposito Projects provider
 */
export class ProjectProvider {

    /**
     * Creates an Exposito Project, with a corresponding Ethereum smart contract.
     * @param params.name Project name
     * @param params.description Project description
     * @param params.shareholders Token distribution 
     */
    async createProject(params: CreateProjectParams): Promise<Project> {
        let project = Project.fromParams(params) as any

        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('projects') as Collection

        let developerTokens = params.shareholders
          .filter(tokenholder => GithubTokenholdersDescription.runtimeType().is(tokenholder))
          .reduce((prev, curr) => prev.add(curr.shares), new BigNumber(0))

        let standardTokens = params.shareholders
          .filter(tokenholder => !GithubTokenholdersDescription.runtimeType().is(tokenholder))
          .reduce((prev, curr) => prev.add(curr.shares), new BigNumber(0))

        let devTokenReceipt = await createContract({
            contract: developerTokenCompiled,
            constructorParams: [ developerTokens, [], [], 18 ] 
        })

        let projectReceipt = await createContract({
            contract: expositoProjectCompiled,
            constructorParams: [ 0, 0, 0, project._id, standardTokens, devTokenReceipt.contractAddress, true ] 
        })

        project.members = project.members.map(member => {
            member.userId = new ObjectID(member.userId)
            return member
        })

        project.contractAddress = projectReceipt.contractAddress

        let results = await col.insertOne(project)

        if (results.insertedCount === 1) {
            project.id = results.insertedId.toHexString()

            await this.createProjectShareholdersDistribution({
                projectId: project.id,
                shareholders: params.shareholders
            })   

            return project
        }
        else
            throw 'Error while creating project'

    }


    async createProjectShareholdersDistribution(params: CreateProjectTokenholdersDistributionParams): Promise<ProjectTokenholdersDistribution> {
        // TODO: Validation

        let projectShareholders = ProjectTokenholdersDistribution.fromParams(params) as any

        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('project-shareholders') as Collection

        convertStringsToObjectIds(projectShareholders)

        let results = await col.insertOne(projectShareholders)

        if (results.insertedCount === 1) 
            return convertObjectIdsToStrings(projectShareholders)        
        else
            throw 'Error while creating shareholders distribution'

    }


    /**
     * Returns a project by its id
     * 
     * @param projectId {string} Project Id
     */
    async getProjectById(projectId: string): Promise<Project> {
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('projects') as Collection

        let project = await col.findOne({ _id: new ObjectID(projectId) })

        return Project.fromJSON(project)
    }

    /**
     * Returns the projects associated with a user
     * 
     * @param userId {string} User Id
     */
    async getUserProjects(userId: string): Promise<Project[]> {
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('projects') as Collection

        let projects = await col.find({ 'members.userId': new ObjectID(userId) }).toArray()

        return projects.map(org => Project.fromJSON(org))
    }

}