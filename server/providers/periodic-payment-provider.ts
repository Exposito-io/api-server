import { ObjectID, Collection } from 'mongodb'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { BitcoinWallet, PeriodicPayment, PeriodicPaymentOptions, FixedPayment, FixedPaymentOptions, Wallet, GetPeriodicPaymentFilters } from 'models'
import { WalletProvider } from './wallet-provider'
import { convertObjectIdsToStrings, convertStringsToObjectIds } from '../lib/convert-object-ids'


class PeriodicPaymentProvider {

    private walletProvider: WalletProvider

    constructor() {
        this.walletProvider = new WalletProvider()
    }

    /**
     * Returns a PeriodicPayment object from its id
     *
     * @param id PeriodicPayment id
     */
    async fetchById(id: string|ObjectID): Promise<PeriodicPayment> {
        if (!(id instanceof ObjectID))
            id = new ObjectID(id)

        let db = await dbFactory.getConnection(config.database)
        let periodicPayment = await db.collection('periodic-payments').findOne({ _id: id })

        if (periodicPayment == null)
            throw('No periodic payment found')
        else 
            return convertObjectIdsToStrings(PeriodicPayment.fromJSON(periodicPayment))

    }


    //async fetchPeriodicPayments(clientId: string|ObjectID) { return this.fetchPeriodicPayments([clientId]) }

    async getPeriodicPayments(filters: GetPeriodicPaymentFilters) {

        let db = await dbFactory.getConnection(config.database)
        let periodicPayments = await db.collection('periodic-payments')
                                        .find({
                                            organizationId: new ObjectID(filters.projectId)
                                        })
                                        .toArray()

        return periodicPayments.map(periodicPayment => PeriodicPayment.fromJSON(periodicPayment))

    }


    async createPeriodicPayment(options: PeriodicPaymentOptions): Promise<PeriodicPayment> {

        // TODO: Validate wallet

        let periodicPayment = new PeriodicPayment(options)

        let db = await dbFactory.getConnection(config.database)

        let insertResult = await db.collection('periodic-payments').insertOne(periodicPayment)
   
        if (insertResult.insertedCount === 1) {
            return this.fetchById(insertResult.insertedId)

        }
        else {
            throw('Problem inserting PeriodicPayment')
        }       
    }

    // TODO: convert periodicPayment arg to PeriodicPaymentRequest ??
    async createFixedPeriodicPayment(paymentOpts: FixedPaymentOptions): Promise<PeriodicPayment> {
        // TODO: Transaction
        // TODO: Validate sourceWalletId and destinationWalletId
        
        let periodicPayment = FixedPayment.fromOptions(paymentOpts)
        let db = await dbFactory.getConnection(config.database)

        let insertResult = await db.collection('periodic-payments').insertOne(periodicPayment)

        if (insertResult.insertedCount === 1) {          
            return this.fetchById(insertResult.insertedId)                
        }
        else {
            throw('Problem inserting PeriodicPayment')
        }

    }

}


export { PeriodicPaymentProvider }