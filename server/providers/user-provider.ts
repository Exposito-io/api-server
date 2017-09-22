/// <reference path="../../types/undefined.d.ts" />

import { ObjectID, Collection } from 'mongodb'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { User } from 'models'
import { OrganizationProvider } from './organization-provider'
import { ProjectProvider } from './project-provider'



const orgProvider = new OrganizationProvider()
const projectProvider = new ProjectProvider()

/**
 * User provider
 *
 */
export class UserProvider {

    constructor() {

    }

    /**
     * Updates Google information for a specific user.
     * If the user doesn't exists, creates it.
     *
     * @param info
     */
    async updateGoogleProfile(googleProfile): Promise<User> {

        let db = await dbFactory.getConnection(config.database)
        let users = await db.collection('users').find({ 'googleProfile.id': googleProfile.id }).limit(1).toArray()

        if (users.length === 0) {
            let result = await this._createUserFromGoogleProfile(googleProfile)
            return User.fromJSON(result.ops[0])
        }
        else {
            await this._updateGoogleProfile(users[0]._id, googleProfile)
            return await this.findById(users[0]._id)
        }

    }


    /**
     * Returns a user from his id
     *
     * @param  {string|ObjectId} id User ID
     * @return {Promise}
     */
    async findById(id: string|ObjectID) {
        if (!(id instanceof ObjectID))
            id = new ObjectID(id);

        let db = await dbFactory.getConnection(config.database)
        let users = await db.collection('users').find({ _id: id }).limit(1).toArray()

        if (users.length === 0)
            throw("No user found")
        else
            return users[0]

    }

    /**
     * Returns a user from his OAuth ID
     *
     * @param  {string} oauthId OAuth ID
     * @return {Promise}        
     */
    findByOauthId(oauthId) {
        return new Promise((resolve, reject) => {
            dbFactory.getConnection(config.database)
            .then(db => db.collection('users').find({ 'googleProfile.id': oauthId }).limit(1).toArray())
            .then(users => {
                if (users.length === 0)
                    throw("No user found")
                else
                    resolve(users[0])
            })
            .catch(err => reject(err))
        })
    }


    /**
     * General search method
     * 
     * @param str 
     */
    async find(str: string): Promise<User[]> {
        
        let db = await dbFactory.getConnection(config.database)

        let userData = await db.collection('users').find({ name: new RegExp(str, "i") }).toArray()

        return userData.map(user => User.fromJSON(user))
        
    }

    /**
     * Validates that users belong to
     * an organization
     * 
     * @deprecated
     * @param organizationId 
     * @param userIds 
     */
    async validateUsersBelongToOrganization(organizationId: string, userIds: string[]) {
        let org = await orgProvider.getOrganizationById(organizationId)

        return userIds.every(userId => org.members.some(member => member.userId === userId))
    }

    /**
     * Promise returns true if specified users are 
     * members of a project
     * 
     * @param projectnId 
     * @param userIds 
     */
    async validateProjectMembers(projectId: string, userIds: string[]): Promise<boolean> {
        let org = await projectProvider.getProjectById(projectId)

        return userIds.every(userId => org.members.some(member => member.userId === userId))
    }    


    private _createUserFromGoogleProfile(googleProfile) {
        //googleProfile = this._extractOauthInfo(googleProfile);

        return dbFactory.getConnection(config.database)
               .then(db => db.collection('users').insertOne({googleProfile}))
    }

    private _updateGoogleProfile(_id, googleProfile) {
        //googleProfile = this._extractOauthInfo(googleProfile);

        return dbFactory.getConnection(config.database)
               .then(db => db.collection('users').updateOne({ _id }, { $set: {googleProfile} }))
    }

    /*
    private _extractOauthInfo(oauthInfo) {

        let info = {
            user_id: oauthInfo.user_id || oauthInfo.id,
            email: oauthInfo.email,
            email_verified: oauthInfo.verified_email || oauthInfo.email_verified
        };

        if (oauthInfo.name) info.name = oauthInfo.name;
        if (oauthInfo.picture) info.picture = oauthInfo.picture;
        if (oauthInfo.locale) info.locale = oauthInfo.locale;

        return info;
    }*/
}



