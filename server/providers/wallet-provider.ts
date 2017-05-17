import { ObjectID } from 'mongodb'
import * as config from 'config'
import * as dbFactory from 'mongo-factory'
import User from '../../models/user'
import { Wallet } from '../../models/wallet'
import { BitcoinWallet } from '../../models/bitcoin-wallet'


class WalletProvider {

    /**
     * Returns a Wallet object from its id
     *
     * @param id Wallet id
     */
    async fetchById(id: string|ObjectID): Promise<Wallet> {
        if (!(id instanceof ObjectID))
            id = new ObjectID(id);

        let db = await dbFactory.getConnection(config.get('database'))
        let wallets = await db.collection('wallets').find({ _id: id }).limit(1).toArray()

        if (wallets.length === 0)
            throw("No user found")
        else
            return Wallet.fromJSON(wallets[0])

    }

    async fetchWalletsForClient(clientId: string|ObjectID) { return this.fetchWalletsForClients([clientId]) }

    async fetchWalletsForClients(clientIds: (string|ObjectID)[]): Promise<Wallet[]> {
        try {
            let clientObjectIds = clientIds.map( clientId => typeof clientId === 'string' ? new ObjectID(clientId) : clientId )
            let db = await dbFactory.getConnection(config.get('database'))
            let wallets = await db.collection('wallets').find({}).toArray()

            return wallets.map(wallet => Wallet.fromJSON(wallet))
        } catch(e) {
            throw('Error fetching wallets')
        }
    }



    async createWallet(wallet: BitcoinWallet): Promise<Wallet> {
        if (!wallet.isValid()) 
            throw('Invalid wallet')

        try {
            let db = await dbFactory.getConnection(config.get('database'))
            let result = await db.collection('wallets').insertOne(wallet.toJSON())

            if (result.insertedId)
                return await this.fetchById(result.insertedId)
                
        } catch(e) {
            // TODO mcormier: Handle error
            throw(e)
        }        
    }

}


export { WalletProvider }