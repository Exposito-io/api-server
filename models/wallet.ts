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

    public getId() { return this._id }
    public getType() { return this.type }
    public getName() { return this.name }
    public getLabels() { return this.labels }
    public getUserId() { return this._userId }

    public setName(name: string): void { this.name = name }
    public addLabel(label: string): void { this.labels.add(label) }
    public removeLabel(label: string): void { this.labels.delete(label) }

    
    
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