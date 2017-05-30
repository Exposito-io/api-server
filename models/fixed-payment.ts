import { PeriodicPayment, PeriodicPaymentType, PeriodicPaymentOptions } from './periodic-payment'
import { Wallet } from './wallet'
import { ObjectID } from 'mongodb'
import * as Money from 'js-money'




export class FixedPayment extends PeriodicPayment {

    constructor(opts: FixedPaymentOptions) {
        super({
            sourceWalletId: opts.sourceWalletId,
            destinationWalletId: opts.destinationWalletId,
            schedule: opts.schedule,
            type: PeriodicPaymentType.FIXED
        })

        //this._outputWalletId = opts.
        this.amount = new Money(opts.amount, opts.currency)

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

        let fixedPayment = new FixedPayment({
            sourceWalletId: json.walletId,
            destinationWalletId: json.recipientWalletId,
            amount: json.amount,
            currency: json.currency,
            schedule: json.schedule
        })

        Object.assign(fixedPayment, json)

        return fixedPayment

    }

}


export class FixedPaymentOptions {
    sourceWalletId: string | ObjectID
    destinationWalletId: string | ObjectID
    amount: number
    currency: string
    schedule: string
    isPaused?: boolean
}

