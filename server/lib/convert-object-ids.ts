import 'reflect-metadata'
import { ObjectID } from 'mongodb'

export function convertStringsToObjectIds(obj: any, maxLevel: number = 50): void {
    for(let key in obj) {
        if (obj[key] instanceof Object)
            convertStringsToObjectIds(obj[key])
        else {
            if (Reflect.hasOwnMetadata('ObjectId', obj.constructor.prototype, key))
                obj[key] = new ObjectID(obj[key])
        }
    }
}


export function convertObjectIdsToStrings(obj: any, maxLevel: number = 50): void {
    for(let key in obj) {
        if (obj[key] instanceof Object)
            convertStringsToObjectIds(obj[key])
        else {
            if (Reflect.hasOwnMetadata('ObjectId', obj.constructor.prototype, key) && obj[key].toHexString)
                obj[key] = obj[key].toHexString()
        }
    }
}