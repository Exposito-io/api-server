import { ObjectID } from 'mongodb'

abstract class Wallet {

    public getId() { return this._id }
    public getType() { return this.type }
    public getName() { return this.name }
    public getLabels() { return this.labels }
    public getUserId() { return this._userId }

    public setName(name: string): void { this.name = name }
    public addLabel(label: string): void { this.labels.add(label) }
    public removeLabel(label: string): void { this.labels.delete(label) }


    protected _id: ObjectID
    protected _userId: ObjectID
    protected type: WalletType = WalletType.UNKNOWN    
    protected name: string
    protected labels: Set<string>

}


enum WalletType {
    UNKNOWN = 0,
    BITCOIN = 1,
    ETHEREUM = 2
}


export { Wallet, WalletType }