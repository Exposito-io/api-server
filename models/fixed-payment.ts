import { PeriodicPayment, PeriodicPaymentType } from './periodic-payment'
import { Wallet } from './wallet'

class FixedPayment extends PeriodicPayment {

    constructor() {
        super()
    }

}


class PeriodicPaymentOptions {
    wallet: Wallet
    type: PeriodicPaymentType
}


export { PeriodicPayment }