import { ObjectID, Collection } from 'mongodb'
import * as config from 'config'
import * as dbFactory from 'mongo-factory'
import { BitcoinWallet, PeriodicPayment, FixedPayment, FixedPaymentOptions, Wallet } from 'models'



class PeriodicPaymentProvider {


    /**
     * Returns a PeriodicPayment object from its id
     *
     * @param id PeriodicPayment id
     */
    async fetchById(id: string|ObjectID): Promise<PeriodicPayment> {
        if (!(id instanceof ObjectID))
            id = new ObjectID(id);

        let db = await dbFactory.getConnection(config.get('database'))
        let periodicPayments = await db.collection('periodic-payments').find({ _id: id }).limit(1).toArray()

        if (periodicPayments.length === 0)
            throw('No periodic payment found')
        else
            return PeriodicPayment.fromJSON(periodicPayments[0])

    }


    async fetchPeriodicPaymentForClient(clientId: string|ObjectID) { return this.fetchPeriodicPaymentForClients([clientId]) }

    async fetchPeriodicPaymentForClients(clientIds: (string|ObjectID)[]) {

        let clientObjectIds = clientIds.map( clientId => typeof clientId === 'string' ? new ObjectID(clientId) : clientId )
        let db = await dbFactory.getConnection(config.get('database'))
        let periodicPayments = await db.collection('periodic-payments').find({ }).toArray()

        return periodicPayments.map(periodicPayment => PeriodicPayment.fromJSON(periodicPayment))

    }

    // TODO: convert periodicPayment arg to PeriodicPaymentRequest ??
    async createFixedPeriodicPayment(paymentOpts: FixedPaymentOptions) {
        // TODO: Validate
        // TODO: Transaction
        
        let periodicPayment = FixedPayment.fromOptions(paymentOpts)
        let db = await dbFactory.getConnection(config.get('database'))

        let insertResult = await db.collection('periodic-payments').insertOne(periodicPayment)

        if (insertResult.insertedCount === 1) {
            let updateResult = await db.collection('wallets')
                                 .updateOne({ _id: periodicPayment.getSourceWalletId() },
                                 { $push: { _periodicPaymentIds: insertResult.insertedId }})

            if (updateResult.modifiedCount === 1)
                return insertResult.insertedId
            else
                throw('Error updating Wallet')
        }
        else {
            throw('Problem inserting PeriodicPayment')
        }

    }

}


export { PeriodicPaymentProvider }