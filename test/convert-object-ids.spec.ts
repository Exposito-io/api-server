import * as mocha from 'mocha'
import * as chai from 'chai'
import { BitcoinWallet, ObjectId } from 'models'
import { ObjectID as MongoObjectId } from 'mongodb'
import 'reflect-metadata'
import { convertObjectIdsToStrings, convertStringsToObjectIds } from '../server/lib/convert-object-ids'


describe('convertStringsToObjectIds', () => {
    
    beforeEach(() => {
        
    })
    
    it('converts the right members', () => {
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


    it('converts nested members', () => {
        class TestClass {
            
            @ObjectId
            isObjectId: string

            isNotObjectId: string

            nested: MemberClass
        }

        class MemberClass {
            @ObjectId
            isObjectId: string

            isNotObjectId: string           
        }

        let t = new TestClass()
        t.isObjectId = '5964f48c13ff364ca47598db'
        t.isNotObjectId = '5964f48c13ff364ca47598db'
        t.nested = new MemberClass()
        t.nested.isObjectId = '5964f48c13ff364ca47598db'
        t.nested.isNotObjectId = '5964f48c13ff364ca47598db'

        let converted = convertStringsToObjectIds(t)

        chai.expect(converted.isObjectId).to.be.an.instanceOf(MongoObjectId)
        chai.expect(converted.isNotObjectId).not.to.be.an.instanceOf(MongoObjectId)

        chai.expect(converted.nested.isObjectId).to.be.an.instanceOf(MongoObjectId)
        chai.expect(converted.nested.isNotObjectId).not.to.be.an.instanceOf(MongoObjectId)        
    })    


    it('converts nested arrays', () => {
        class TestClass {
            
            @ObjectId
            isObjectId: string

            isNotObjectId: string

            nested: MemberClass[]
        }

        class MemberClass {
            @ObjectId
            isObjectId: string

            isNotObjectId: string           
        }

        let t = new TestClass()
        t.isObjectId = '5964f48c13ff364ca47598db'
        t.isNotObjectId = '5964f48c13ff364ca47598db'

        t.nested = []
        t.nested[0] = new MemberClass()
        t.nested[0].isObjectId = '5964f48c13ff364ca47598db'
        t.nested[0].isNotObjectId = '5964f48c13ff364ca47598db'
        
        t.nested[1] = new MemberClass()
        t.nested[1].isObjectId = '5964f48c13ff364ca47598db'
        t.nested[1].isNotObjectId = '5964f48c13ff364ca47598db'        

        let converted = convertStringsToObjectIds(t)

        chai.expect(converted.isObjectId).to.be.an.instanceOf(MongoObjectId)
        chai.expect(converted.isNotObjectId).not.to.be.an.instanceOf(MongoObjectId)

        chai.expect(converted.nested[0].isObjectId).to.be.an.instanceOf(MongoObjectId)
        chai.expect(converted.nested[0].isNotObjectId).not.to.be.an.instanceOf(MongoObjectId)      
        chai.expect(converted.nested[1].isObjectId).to.be.an.instanceOf(MongoObjectId)
        chai.expect(converted.nested[1].isNotObjectId).not.to.be.an.instanceOf(MongoObjectId)             
    })        


})