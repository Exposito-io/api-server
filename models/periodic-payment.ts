import { ObjectID } from 'mongodb'
import { Wallet, CryptoCurrency } from './wallet'
import * as Money from 'js-money'



abstract class PeriodicPayment {


    constructor(opts: PeriodicPaymentOptions) {
        if (typeof opts.walletId === 'string')
            opts.walletId = new ObjectID(opts.walletId)

        if (typeof opts.recipientWalletId === 'string')
            opts.recipientWalletId = new ObjectID(opts.recipientWalletId)            

        this._walletId = opts.walletId
        this._recipientWalletId = opts.recipientWalletId
        this.type = opts.type
        this.schedule = opts.schedule
    }

    getId() { return this._id }
    getWalletId() { return this._walletId }
    getWallet() { return this.wallet }
    
    getRecipientWalletId() { return this._recipientWalletId }
    getRecipientWallet() { return this.recipientWallet }

    getSchedule() { return this.schedule }

    isPaused() { return this.paused }
    isDeleted() { return this.deleted }


    getNextPaymentTime() {
        return new Date()
    }

    /**
     * Returns an estimate of the next payment 
     * amount
     */
    abstract getNextPaymentEstimateAmount(): Money

    /**
     * Returns the current payment amount
     */
    abstract getPaymentAmount(): Money


    protected _id: ObjectID
    protected _walletId: ObjectID
    protected _recipientWalletId: ObjectID

    protected wallet: Wallet
    protected recipientWallet: Wallet
    protected type: PeriodicPaymentType
    protected cryptoCurrency: CryptoCurrency
    protected schedule: string


    protected paused: boolean
    protected deleted: boolean

    static isValidJSON(json: any): boolean {
        if (!(json instanceof Object))
            return false

        // Full object validation
        if (json._id) {
            // TODO
            return true
        }
        // Partial object validation
        else {
            // TODO
            return true
        }
    }

    static fromJSON(json: Object): PeriodicPayment {
        let periodicPayment = PERIODIC_PAYMENT_CLASSES.find(p => p.isValidJSON(json) && PeriodicPayment.isValidJSON(json))[0]

        if (periodicPayment == null)
            throw('Invalid JSON')

        return periodicPayment
    }

}


class PeriodicPaymentOptions {
    walletId: ObjectID|string
    recipientWalletId: ObjectID|string
    type: PeriodicPaymentType
    schedule: string
}

enum PeriodicPaymentType {
    UNKNOWN = 0,
    FIXED = 1,
    RESOURCE = 2
}



import { FixedPayment } from './fixed-payment'


const PERIODIC_PAYMENT_CLASSES = [
    FixedPayment
]


export { PeriodicPayment, PeriodicPaymentType, PeriodicPaymentOptions }