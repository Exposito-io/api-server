import { Wallet, WalletType } from './wallet'
import CoreWallet from './core/wallet'


class BitcoinWallet extends Wallet {

    protected coreWallet: CoreWallet

    constructor() {
        super()
        
        this.type = WalletType.BITCOIN
    }
}