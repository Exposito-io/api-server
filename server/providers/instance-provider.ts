import { ObjectID, Collection } from 'mongodb'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { BitcoinWallet, PeriodicPayment, Wallet, BitcoinWalletOptions, Instance } from 'models'
import CoreClient from '../core-client'
import * as _ from 'lodash'


export abstract class InstanceProvider {

    /*
    async getById(id: string): Promise<Instance> {
        // TODO validate id
        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('wallets') as Collection
        let wallets = await col.findOne({ _id: new ObjectID(id) })

        if (wallets.length === 0)
            throw("No user found")
        else
            return Instance.fromJSON(wallets[0])        
    }*/


}