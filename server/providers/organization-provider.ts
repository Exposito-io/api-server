import { Organization, CreateOrganizationParams, ExpositoError, ErrorCode } from 'models'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { Collection } from 'mongodb'


export class OrganizationProvider {


    constructor() {

    }

    async createOrganization(params: CreateOrganizationParams): Promise<Organization> {
        let organization = Organization.fromParams(params)

        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('organizations') as Collection
        let results = await col.insertOne(organization)

        if (results.insertedCount === 1) {
            organization.id = results.insertedId.toHexString()
            return organization
        }
        else
            throw 'Error while creating organization'

    }

    async getUserOrganizations(userId: string): Promise<Organization[]> {
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('organizations') as Collection

        let organizations = await col.find({ 'members.userId': userId }).toArray()

        return organizations.map(org => Organization.fromJSON(org))
    }

}