import * as chai from 'chai'
import { ObjectId } from 'models'
import { ObjectID as MongoObjectId } from 'mongodb'
import 'reflect-metadata'
import { convertObjectIdsToStrings, convertStringsToObjectIds } from '../server/lib/convert-object-ids'


describe('convertStringsToObjectIds', () => {
    
    beforeEach(() => {
        
    })

    it('adds ObjectId metadata to the right properties', () => {
        class SimpleTest {
            
            @ObjectId
            isObjectId: string

            isNotObjectId: string
        }

        let t = new SimpleTest()
        t.isObjectId = '5964f48c13ff364ca47598db'
        t.isNotObjectId = '5964f48c13ff364ca47598db'

        let converted = convertStringsToObjectIds(t)

        chai.expect(converted.isObjectId).to.be.an.instanceOf(MongoObjectId)
        chai.expect(converted.isNotObjectId).not.to.be.an.instanceOf(MongoObjectId)
    })

})