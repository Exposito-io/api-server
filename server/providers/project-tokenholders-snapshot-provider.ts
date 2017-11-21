import { 
    ProjectTokenholdersSnapshot,
    ExpositoError, 
    ErrorCode 
} from 'models'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { ObjectID, Collection } from 'mongodb'
import { convertObjectIdsToStrings, convertStringsToObjectIds } from '../lib/convert-object-ids'


export class ProjectTokenholdersSnapshotProvider {


    constructor() {

    }


    async getLatestSnapshot(projectId: string): Promise<ProjectTokenholdersSnapshot>  {

        return {
            date: new Date(),
            id: '',
            projectId: projectId,
            tokenholders: [
                {
                    name: 'Mathew Cormier',
                    picture: 'https://avatars2.githubusercontent.com/u/642515?v=4&s=460',
                    shares: '1000',
                    walletAddresses: [],

                },
                {
                    name: '',
                    picture: 'http://www.drtoddcase.com/images/istock-images/istock_000018535175xsmall.jpg',
                    shares: '500',
                    walletAddresses: []
                }
            ]
        }
        /*
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

            await this.createProjectShareholdersDistribution({
                projectId: project.id,
                shareholders: params.shareholders
            })   

            return project
        }
        else
            throw 'Error while creating project'
        */
    }



}