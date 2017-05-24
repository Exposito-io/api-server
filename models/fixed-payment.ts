import { PeriodicPayment, PeriodicPaymentType, PeriodicPaymentOptions } from './periodic-payment'
import { Wallet } from './wallet'
import { ObjectID } from 'mongodb'
import * as Money from 'js-money'




class FixedPayment extends PeriodicPayment {

    constructor(opts: FixedPaymentOptions) {
        super({
            walletId: opts.walletId,
            recipientWalletId: opts.recipientWalletId,
            schedule: opts.schedule,
            type: PeriodicPaymentType.FIXED
        })

        //this._outputWalletId = opts.
        this.amount = opts.amount
        this.schedule = opts.schedule

    }


    getAmount() { return this.amount }


    getPaymentAmount() {
        return this.amount
    }

    getNextPaymentEstimateAmount() {
        return this.amount
    }


    protected amount: Money



    static isValidJSON(json: any): boolean {
        if (!PeriodicPayment.isValidJSON(json))
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


    static fromJSON(json: any): FixedPayment {
        if (!FixedPayment.isValidJSON(json))
            throw('Invalid JSON')

        let periodicPayment = PeriodicPayment.fromJSON(json)

        let fixedPayment = new FixedPayment({
            walletId: json.walletId,
            recipientWalletId: json.recipientWalletId,
            amount: json.amount,
            schedule: json.schedule
        })

        Object.assign(fixedPayment, periodicPayment)

        Object.assign(fixedPayment, json)

        return fixedPayment

    }

}


class FixedPaymentOptions {
    walletId: string | ObjectID
    recipientWalletId: string | ObjectID
    amount: Money
    schedule: string
    isPaused?: boolean
}



export { FixedPayment, FixedPaymentOptions }