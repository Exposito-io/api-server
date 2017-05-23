import { ObjectID } from 'mongodb'
import { Wallet, CryptoCurrency } from './wallet'
import * as Money from 'js-money'



abstract class PeriodicPayment {


    constructor(opts: PeriodicPaymentOptions) {
        if (typeof opts.walletId === 'string')
            opts.walletId = new ObjectID(opts.walletId)

        this._walletOutId = opts.walletId
        this.type = opts.type
        this.schedule = opts.schedule
    }

    getId() { return this._id }
    getWalletOutId() { return this._walletOutId }
    getWalletOut() { return this.wallet }
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
    protected _walletOutId: ObjectID
    protected _outputWalletId: ObjectID
    protected wallet: Wallet
    protected outputWallet: Wallet
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