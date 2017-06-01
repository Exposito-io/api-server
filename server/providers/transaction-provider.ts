import { ObjectID } from 'mongodb'
import * as config from 'config'
import * as dbFactory from 'mongo-factory'
import { BitcoinWallet, PeriodicPayment, Wallet, CreatePaymentRequest, PaymentDestination } from 'models'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import { ExchangeRateProvider } from 'currency-converter'
import * as Money from 'js-money'



export class TransactiontProvider {

    protected currencyConverter: ExchangeRateProvider

    constructor() {
        this.currencyConverter = new ExchangeRateProvider()        
    }

    /**
     * Create a Payment
     *
     * @param id Payment id
     */
    async createPayment(request: CreatePaymentRequest): Promise<string> {

        let amount = Money.fromDecimal(request.amount, request.currency)

        switch(request.destinationType) {
            case PaymentDestination.BITCOIN_ADDRESS: 
                let satoshiAmount = await this.currencyConverter.convert(amount, 'satoshi')

                return this.createBitcoinPayment({
                    sourceWalletId: request.sourceWalletId,
                    //bitcointDestinationAddress: request.destination,
                    bitcointDestinationAddress: request.destination,
                    amount: satoshiAmount.amount
                })
        } 
        

    }


    async createBitcoinPayment(request: CreateBitcoinPaymentOptions): Promise<string> {
        let client = await CoreClient.getClient(request.sourceWalletId)
        let amount = CoreClient.parseAmount(request.amount)
        let feePerKb = !_.isUndefined(request.fee) ? CoreClient.parseAmount(request.fee) : 100e2
        let destination = request.bitcointDestinationAddress

        let note = request.note || ''

        let txp = await client.createTxProposal({
            outputs: [{
                toAddress: destination,
                amount: amount,
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


    async createWalletPayment(request: CreatePaymentRequest): Promise<string> {
        return ''
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