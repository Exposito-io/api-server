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
        {from: WalletType.BITCOIN, to: PaymentDestination.WALLET, fn: this.createBitcoinToWalletPayment}
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

        let fnConfig = this.createFunctions.find(p => p.from === wallet.getType() && p.to === request.destinationType)

        if (!fnConfig)
            throw new ExpositoError(ErrorCode.UNKNOWN_PAYMENT_REQUEST)

        let fn = fnConfig.fn.bind(this) as Function

        let result = await fn(request)

        // TODO: unlock

        return result

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
        request.destination = bitcoinAddress
        request.destinationType = PaymentDestination.BITCOIN_ADDRESS

        return this.createBitcoinPayment(bitcoinRequest)
    }


    async getFees(): Promise<Money> {
        return Money.fromInteger(100e2, 'satoshi')
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