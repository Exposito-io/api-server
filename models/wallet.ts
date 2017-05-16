import { ObjectID } from 'mongodb'
import BitcoinWallet from './bitcoin-wallet'

enum WalletType {
    UNKNOWN = 0,
    BITCOIN = 1,
    ETHEREUM = 2
}

const WALLET_TYPES_MAP = new Map<WalletType, Function>([
    [WalletType.BITCOIN, BitcoinWallet.fromJSON]
])



abstract class Wallet {

    getId() { return this._id }
    getType() { return this.type }
    getName() { return this.name }
    getLabels() { return this.labels }
    getUserId() { return this._userId }

    setName(name: string) { this.name = name }
    addLabel(label: string) { this.labels.add(label) }
    removeLabel(label: string) { this.labels.delete(label) }

    
    isValid(): boolean {
        // TODO mcormier
        return true
    }
    
    static fromJSON(json: any): Wallet {
        if (Wallet.isJsonWalletValid(json)) {
            let wallet = WALLET_TYPES_MAP.get(json.type)(json)

            wallet._id = new ObjectID(json._id)
            wallet.type = <WalletType>json.type
            wallet.name = json.name
            wallet.labels = new Set(json.labels)
            wallet._userId = json._userId

            return wallet
        }
    }


    static isJsonWalletValid(json: any) {
        return typeof json._id === 'string'
            && typeof json.name === 'string'
            && typeof json.type === 'number'
            && WALLET_TYPES_MAP.has(json.type)
            && json.labels instanceof Array // TODO mcormier: validate each labels
            && typeof json._userId === 'string'
    }


    protected _id: ObjectID
    protected _userId: ObjectID
    protected type: WalletType = WalletType.UNKNOWN    
    protected name: string
    protected labels: Set<string> = new Set<string>()

}






export { Wallet, WalletType }