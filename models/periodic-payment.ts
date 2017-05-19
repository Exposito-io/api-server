import { ObjectID } from 'mongodb'
import { Wallet, CryptoCurrency } from './wallet'

abstract class PeriodicPayment {

    getId() { return this._id }
    getWalletId() { return this._walletId }
    getWallet() { return this.wallet }


    protected _id: ObjectID
    protected _walletId: ObjectID
    protected wallet: Wallet
    protected type: PeriodicPayment
    protected cryptoCurrency: CryptoCurrency

    /*
    static fromJSON(): PeriodicPayment {

    }*/

}


class PeriodicPaymentOptions {
    wallet: Wallet
    type: PeriodicPaymentType
}

enum PeriodicPaymentType {
    UNKNOWN = 0,
    FIXED = 1,
    RESOURCE = 2
}


export { PeriodicPayment, PeriodicPaymentType }