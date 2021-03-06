import { ObjectID, Collection } from 'mongodb'
import config from '../../config'
import * as dbFactory from 'mongo-factory'
import { 
    BitcoinWallet, 
    PeriodicPayment, 
    Wallet, 
    CreatePaymentRequest, 
    PaymentDestination, 
    WalletType, 
    Transaction,
    ExpositoError, 
    ErrorCode, 
} from 'models'
import { WalletProvider } from './wallet-provider'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import { ExchangeRateProvider } from 'currency-converter'
import { Money, Currencies } from 'models'
import * as BigNumber from 'bignumber.js'


export class TransactiontProvider {

    protected createFunctions = [
        {from: WalletType.BITCOIN, to: PaymentDestination.BITCOIN_ADDRESS, fn: this.createBitcoinPayment},
        {from: WalletType.BITCOIN, to: PaymentDestination.EXPOSITO_WALLET, fn: this.createBitcoinToWalletPayment}
    ]

    protected currencyConverter: ExchangeRateProvider
    protected walletProvider: WalletProvider


    constructor() {
        this.currencyConverter = new ExchangeRateProvider()
        this.walletProvider = new WalletProvider()
    }

    /**
     * Create a Payment
     *
     * @param id Payment id
     */
    async createPayment(request: CreatePaymentRequest): Promise<string> {

        if (!CreatePaymentRequest.validate(request))
            throw(new ExpositoError(ErrorCode.INVALID_CREATE_PAYMENT_REQUEST))

        let wallet = await this.walletProvider.fetchById(request.sourceWalletId)
        // TODO: Lock wallet

        let fnConfig = this.createFunctions.find(p => p.from === wallet.type && p.to === request.destinationType)

        if (!fnConfig)
            throw new ExpositoError(ErrorCode.UNKNOWN_PAYMENT_REQUEST)

        let fn = fnConfig.fn.bind(this) as Function

        let result = await fn(request)


        let db = await dbFactory.getConnection(config.database)
        let col = db.collection('transactions') as Collection
        
        //let userData = await col.insertOne({ name: new RegExp(str, "i") }).toArray()
        
        // TODO: unlock

        return result

    }


    /**
     * Returns transactions for a specific wallet
     * // TODO: Add date param
     * @param walletId 
     */
    async getTransactionsForWallet(walletId: string): Promise<Transaction[]>{
        let db = await dbFactory.getConnection(config.database)
        
        let txCollection = db.collection('transactions') as Collection

        
        let txJson = await txCollection.find({ 
            $or: [{ 
                sourceWalletId: walletId, 
                sourceType: PaymentDestination.EXPOSITO_WALLET 
            }, { 
                destination: walletId,
                destinationType: PaymentDestination.EXPOSITO_WALLET 
            }]
        }).sort({ endDate: -1 }).toArray()


        return txJson.map(Transaction.fromJSON)
                     .map(tx => {
                        if (tx.sourceWalletId === walletId) 
                            tx.amount = new BigNumber(tx.amount).mul(-1).toString()
                        
                        return tx
        })

    }

    /**
     * Method used by the demo, should not be used in production
     * @param request 
     */
    async createPaymentDemo(request: CreatePaymentRequest): Promise<any> {

        //if (!CreatePaymentRequest.validate(request))
        //    throw(new ExpositoError(ErrorCode.INVALID_CREATE_PAYMENT_REQUEST))


        let db = await dbFactory.getConnection(config.database)

        let walletCollection = db.collection('wallets') as Collection

        if (request.sourceType === PaymentDestination.EXPOSITO_WALLET) 
            await this.removeAmountFromWallet(request.sourceWalletId, request.amount, request.currency)        

        if (request.destinationType === PaymentDestination.EXPOSITO_WALLET) 
            await this.addAmountToWallet(request.destination, request.amount, request.currency)
        

        let transactionsCollection = db.collection('transactions') as Collection
        
        let t: Transaction = {
            sourceWalletId: request.sourceWalletId,
            sourceType: request.sourceType,
            destination: request.destination,
            destinationType: request.destinationType,
            currency: request.currency,
            amount: request.amount,
            creationDate: new Date(),
            endDate: new Date(),
            status: 1
        }

        let result = await transactionsCollection.insertOne(t)
        

        return t

    }


    async createBitcoinPayment(request: CreatePaymentRequest/*CreateBitcoinPaymentOptions*/): Promise<string> {
        // TODO: Validate request as bitcoin

        let client = await CoreClient.getClient(request.sourceWalletId)
        let amount = Money.fromStringDecimal(request.amount, request.currency)

        let amountSat = await this.currencyConverter.convert(amount, 'satoshi')
        let feePerKb = (await this.getFees()).amount
        let destination = request.destination

        let note = request.note || ''

        let txp = await client.createTxProposal({
            outputs: [{
                toAddress: destination,
                amount: amountSat.amount,
            }],
            message: note,
            feePerKb: feePerKb,
        })

        await client.publishTxProposal({ txp: txp })

        //res.json({ tid: CoreClient.shortID(txp.id) })
        let txpid = CoreClient.shortID(txp.id)

        let txps = await client.getTxProposals({})

        let txp1 = CoreClient.findOneTxProposal(txps, txpid)

        let tx = await client.signTxProposal(txp1)

        console.log('Transaction signed by you.')

        let txp2 = await client.broadcastTxProposal(txp1)

        console.log('Transaction Broadcasted: TXID: ' + txp2.txid)

        return txp2.txid

        /*
        console.log(' * Tx created: ID %s [%s] RequiredSignatures:',
            CoreClient.shortID(txp.id), txp.status, txp.requiredSignatures);*/
    }


    async createBitcoinToWalletPayment(request: CreatePaymentRequest): Promise<string> {
        let bitcoinAddress = await this.walletProvider.getBitcoinPublicAddress(request.destination)

        let bitcoinRequest = Object.assign({}, request)
        bitcoinRequest.destination = bitcoinAddress
        bitcoinRequest.destinationType = PaymentDestination.BITCOIN_ADDRESS

        return this.createBitcoinPayment(bitcoinRequest)
    }


    async getFees(): Promise<Money> {
        return Money.fromInteger(100e2, 'satoshi')
    }



    private async addAmountToWallet(walletId: string, amount: string, currency: string): Promise<void> {
        try {
            let db = await dbFactory.getConnection(config.database)        
            let walletCollection = db.collection('wallets') as Collection

            let walletMongoId = new ObjectID(walletId)

            let wallet = await walletCollection.findOne({ _id: walletMongoId })
            let walletAmount = Money.fromStringDecimal(wallet.amount, wallet.currency)
            let txAmount = Money.fromStringDecimal(amount, currency)

            if (txAmount.currency === 'USD' && wallet.currency === 'BTC')
                txAmount = convertUsdToBtc(txAmount)

            if (txAmount.currency === 'BTC' && wallet.currency === 'USD')
                txAmount = convertBtcToUsd(txAmount)        

            let newWalletAmount = walletAmount.add(txAmount)
            // TODO check if less than 0, etc...

            let r = await walletCollection.updateOne({ _id: walletMongoId }, { $set: { amount: newWalletAmount.toString() } })
        } catch(e) {
            console.log('Error adding amount to wallet', e)
        }
    }


    private async removeAmountFromWallet(walletId: string, amount: string, currency: string): Promise<void> {
        let db = await dbFactory.getConnection(config.database)        
        let walletCollection = db.collection('wallets') as Collection

        let walletMongoId = new ObjectID(walletId)

        let wallet = await walletCollection.findOne({ _id: walletMongoId })
        let walletAmount = Money.fromStringDecimal(wallet.amount, wallet.currency)
        let txAmount = Money.fromStringDecimal(amount, currency)

        if (txAmount.currency === 'USD' && wallet.currency === 'BTC')
            txAmount = convertUsdToBtc(txAmount)

        if (txAmount.currency === 'BTC' && wallet.currency === 'USD')
            txAmount = convertBtcToUsd(txAmount)           

        let newWalletAmount = walletAmount.subtract(txAmount)
        // TODO check if less than 0, etc...

        let r = await walletCollection.updateOne({ _id: walletMongoId }, { $set: { amount: newWalletAmount.toString() } })
    }

 
}


class CreateBitcoinPaymentOptions {
    sourceWalletId: string
    bitcointDestinationAddress: string

    /** Payment amount in satoshis */
    amount: number

    /** Transaction fee in satoshis  */
    fee?: number

    note?: string
}



function convertBtcToUsd(btcAmount: Money) {
    return Money.fromStringDecimal(btcAmount.multiply(14000).toDecimal().toFixed(2), 'USD') as Money
}


function convertUsdToBtc(usdAmount: Money) {    
    return Money.fromStringDecimal(usdAmount.toString(), 'BTC').divide(14000) as Money
}