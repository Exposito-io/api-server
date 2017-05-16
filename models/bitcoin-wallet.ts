import { Wallet, WalletType } from './wallet'
import CoreWallet from './core/wallet'


class BitcoinWallet extends Wallet {

    protected coreWallet: CoreWallet

    constructor() {
        super()
        
        this.type = WalletType.BITCOIN
    }


    isValid(): boolean {
        // TODO mcormier
        return super.isValid()
            && true
    }


    toJSON(): any {
        // TODO mcormier
        let walletJson = super.toJSON()
        return Object.assign(walletJson, this)
    }

    static fromJSON(json): BitcoinWallet {
        return new BitcoinWallet()
    }
}


export default BitcoinWallet