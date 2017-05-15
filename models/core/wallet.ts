import {NETWORKS, DERIVATION_STRATEGIES, SCRIPT_TYPES} from './constants'
import * as Uuid from 'uuid'


class CoreWallet {
    version: string = '1.0.0'
    createdOn: number = Math.floor(Date.now() / 1000)
    id: string
    name: string
    m: number
    n: number
    singleAddress: boolean
    status: string = 'pending'
    publicKeyRing: Array<any> = []
    addressIndex: number = 0
    copayers: Array<any> = []
    pubKey: string
    network: NETWORKS
    derivationStrategy: DERIVATION_STRATEGIES = DERIVATION_STRATEGIES.BIP45
    addressType: SCRIPT_TYPES = SCRIPT_TYPES.P2SH
    scanStatus: any
    addressManager: AddressManager

    
    constructor(opts: CoreWalletOpts) {
      this.id = opts.id || Uuid.v4()
      this.name = opts.name
      this.m = opts.m
      this.n = opts.n
      this.singleAddress = !!opts.singleAddress      
      this.pubKey = opts.pubKey
      this.network = opts.network
      this.derivationStrategy = opts.derivationStrategy || DERIVATION_STRATEGIES.BIP45
      this.addressType = opts.addressType || SCRIPT_TYPES.P2SH    
      this.addressManager = new AddressManager({
        derivationStrategy: this.derivationStrategy
      })
      this.scanStatus = null


    }

    static fromObj(obj: CoreWallet): CoreWallet {
        let x = new CoreWallet({
          id: obj.id,
          name: obj.name,
          m: obj.m,
          n: obj.n,
          singleAddress: obj.singleAddress,
          pubKey: obj.pubKey,
          network: obj.network,
          derivationStrategy: obj.derivationStrategy,
          addressType: obj.addressType
        })

        x.version = obj.version
        x.createdOn = obj.createdOn

        // TODO

        return x
    }

}

class CoreWalletOpts {
    id?: string
    name: string
    m: number
    n: number
    singleAddress: boolean
    pubKey: string
    network: NETWORKS   
    derivationStrategy?: DERIVATION_STRATEGIES
    addressType?: SCRIPT_TYPES     
}

export default CoreWallet