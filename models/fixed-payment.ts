import { PeriodicPayment, PeriodicPaymentType, PeriodicPaymentOptions } from './periodic-payment'
import { Wallet } from './wallet'
import { ObjectID } from 'mongodb'


class FixedPayment extends PeriodicPayment {

    constructor(opts: FixedPaymentOptions) {
        super({
            walletId: opts.walletId,
            type: PeriodicPaymentType.FIXED
        })

        //this._outputWalletId = opts.
        this.amount = opts.amount
        this.schedule = opts.schedule

    }


    getAmount() { return this.amount }
    setAmount(amount: number) { this.amount = amount }


    protected amount: number
    protected schedule: string


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
    amount: number
    schedule: string
    isPaused?: boolean
}



export { FixedPayment, FixedPaymentOptions }