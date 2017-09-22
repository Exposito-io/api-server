import { ObjectID, Collection } from 'mongodb'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { BitcoinWallet, PeriodicPayment, Wallet, BitcoinWalletOptions } from 'models'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import { convertObjectIdsToStrings, convertStringsToObjectIds } from '../lib/convert-object-ids'


class WalletProvider {

    /**
     * Returns a Wallet object from its id
     *
     * @param id Wallet id
     */
    async fetchById(id: string|ObjectID): Promise<Wallet> {
        if (!(id instanceof ObjectID))
            id = new ObjectID(id);

        let db = await dbFactory.getConnection(config.database)
        let wallets = await db.collection('wallets').find({ _id: id }).limit(1).toArray()

        if (wallets.length === 0)
            throw("No user found")
        else
            return Wallet.fromJSON(convertObjectIdsToStrings(wallets[0]))

    }

    async fetchWalletsForClient(clientId: string|ObjectID) { return this.fetchWalletsForClients([clientId]) }

    async fetchWalletsForClients(clientIds: (string|ObjectID)[]): Promise<Wallet[]> {
        try {
            let clientObjectIds = clientIds.map( clientId => typeof clientId === 'string' ? new ObjectID(clientId) : clientId )
            let db = await dbFactory.getConnection(config.database)
            let wallets = await db.collection('wallets').find({}).toArray()

            return wallets.map(wallet => Wallet.fromJSON(convertObjectIdsToStrings(wallet)))
        } catch(e) {
            throw('Error fetching wallets')
        }
    }


    async createBitcoinWallet(params: BitcoinWalletOptions): Promise<BitcoinWallet> {

        let db = await dbFactory.getConnection(config.database)
        let col = await db.collection('wallets') as Collection

        let wallet = BitcoinWallet.fromParams(params)

        let client = await CoreClient.getClient()

        client.seedFromRandomWithMnemonic({
            network: config.bitcoinNetwork,
            passphrase: undefined,
            language: 'en',
        })

        let secret = await client.createWallet(wallet.name, 'copayer1', 1, 1, {
            network: config.bitcoinNetwork
        })


        console.log(' * ' + _.capitalize(config.bitcoinNetwork) + ' Wallet Created.')


        let str = client.export()
        wallet.coreWallet = JSON.parse(str)

        let result = await col.insertOne(convertStringsToObjectIds(wallet))
   
        
        if (result.insertedCount === 1) {
            wallet.id = result.insertedId.toHexString()
            return wallet
        }
        else
            throw 'Error creating wallet'
    }

    async createWallet(wallet: BitcoinWallet): Promise<Wallet> {
        if (!wallet.isValid()) 
            throw('Invalid wallet')

        try {
            let db = await dbFactory.getConnection(config.database)
            let result = await db.collection('wallets').insertOne(wallet.toJSON())

            if (result.insertedId)
                return await this.fetchById(result.insertedId)

        } catch(e) {
            // TODO mcormier: Handle error
            throw(e)
        }
    }

    async getBitcoinPublicAddress(walletId: string|ObjectID) {

        let wallet = await this.fetchById(walletId) as BitcoinWallet
        let client = await CoreClient.getClient(walletId)
        let result = await client.createAddress({})

        if (!result.address)
            throw('')

        return result.address

    }

    async attachPeriodicPayment(payment: PeriodicPayment, wallet: Wallet) {
        // TODO: Return last created address if it was never used


    }

}


export { WalletProvider }