import * as Constants from './constants'


class CoreWallet {
    readonly version: string = '1.0.0'
    readonly createdOn: number
    readonly id: string
    readonly name: string
    readonly m: number
    readonly n: number
    readonly singleAddress: boolean
    readonly status: string
    readonly publicKeyRing: Array<any>
    readonly addressIndex: number
    readonly copayers: Array<any>
    readonly pubKey: string
    readonly network: Constants.NETWORKS
    readonly derivationStrategy: Constants.DERIVATION_STRATEGIES
    readonly addressType: Constants.SCRIPT_TYPES

    
    constructor(opts: CoreWalletOpts) {

    }

}

class CoreWalletOpts {
    id?: string
    name: string
    m: number
    n: number
    singleAddress: boolean
    pubKey: string
    network: Constants.NETWORKS   
    derivationStrategy?: Constants.DERIVATION_STRATEGIES
    addressType?: Constants.SCRIPT_TYPES     
}

export default CoreWallet