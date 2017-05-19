import { ObjectID } from 'mongodb'
import { Wallet, CryptoCurrency } from './wallet'

abstract class PeriodicPayment {

    getId() { return this._id }
    getWalletId() { return this._walletId }
    getWallet() { return this.wallet }

    isPaused() { return this.paused }
    isDeleted() { return this.deleted }


    protected _id: ObjectID
    protected _walletId: ObjectID
    protected _outputWalletId: ObjectID
    protected wallet: Wallet
    protected outputWallet: Wallet
    protected type: PeriodicPayment
    protected cryptoCurrency: CryptoCurrency
    

    protected paused: boolean
    protected deleted: boolean
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