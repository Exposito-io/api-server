import { Wallet, WalletType } from './wallet'
import { BitcoinCoreWallet } from './core/bitcoin-core-wallet'


class BitcoinWallet extends Wallet {

    protected coreWallet: BitcoinCoreWallet

    constructor(coreWallet?: BitcoinCoreWallet) {
        super()

        this.coreWallet = coreWallet
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


    static fromJSON(json: any): BitcoinWallet {
        if (!BitcoinWallet.isJsonWalletValid(json))
            throw('Invalid wallet JSON')

        let wallet = Wallet.fromJSON(json)        
        let bitcoinWallet = new BitcoinWallet(BitcoinCoreWallet.fromObj(json.bitcoinWallet))

        Object.assign(bitcoinWallet, wallet)        

        return bitcoinWallet
    }


    static isJsonWalletValid(json: any) {
        return Wallet.isJsonWalletValid(json)
            && json.bitcoinWallet instanceof Object
    }


}


export { BitcoinWallet }