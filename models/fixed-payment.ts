import { PeriodicPayment, PeriodicPaymentType } from './periodic-payment'
import { Wallet } from './wallet'


class FixedPayment extends PeriodicPayment {

     getAmount() { return this.amount }
     setAmount(amount: number) { this.amount = amount }

    constructor() {
        super()
    }


    protected amount: number
    protected schedule: string
    

}


class FixedPaymentOptions {
    wallet: Wallet
    amount: number
    schedule: string
    type: PeriodicPaymentType
    isPaused?: boolean
}



export { FixedPayment, FixedPaymentOptions }