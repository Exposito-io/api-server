import { ObjectID } from 'mongodb'
import * as config from 'config'
import * as dbFactory from 'mongo-factory'
import { BitcoinWallet, PeriodicPayment, Wallet, CreatePaymentRequest, PaymentDestination, WalletType, ExpositoError, ErrorCode } from 'models'
import { WalletProvider } from './wallet-provider'
import CoreClient from '../core-client'
import * as _ from 'lodash'
import { ExchangeRateProvider } from 'currency-converter'
import { Money, Currencies } from 'models'



export class TransactiontProvider {

    protected createFunctions = [
        {from: WalletType.BITCOIN, to: PaymentDestination.BITCOIN_ADDRESS, fn: this.createBitcoinPayment},
        {from: WalletType.BITCOIN, to: PaymentDestination.WALLET, fn: this.createBitcoinPayment}
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

        let wallet = await this.walletProvider.fetchById(request.sourceWalletId)
        // TODO: Lock wallet

        let fn = this.createFunctions.find(p => p.from === wallet.getType() && p.to === request.destinationType).fn as Function

        if (!fn)
            throw new ExpositoError(ErrorCode.UNKNOWN_PAYMENT_REQUEST)

        await fn()

        // TODO: unlock
        /*
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

            case PaymentDestination.WALLET: 
                return 

        }*/

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
                amount: amountSat,
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


    async getFees(): Promise<Money> {
        return Money.fromInteger(100e2)
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