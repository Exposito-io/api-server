import { Wallet, WalletType } from './wallet'
import CoreWallet from './core/wallet'


class BitcoinWallet extends Wallet {

    protected coreWallet: CoreWallet

    constructor() {
        super()
        
        this.type = WalletType.BITCOIN
    }


    isValid(): boolean {
        // TODO mcormier:
        return super.isValid()
            && true
    }

    static fromJSON(json): BitcoinWallet {
        return new BitcoinWallet()
    }
}


export default BitcoinWallet