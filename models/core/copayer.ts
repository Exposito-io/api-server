import {NETWORKS, DERIVATION_STRATEGIES, SCRIPT_TYPES} from './constants'
import CoreAddress from '../../models/core/address'
import CoreAddressManager from '../../models/core/address-manager'
import CoreWallet from '../../models/core/wallet'
import * as preconditions from 'preconditions'
import * as sjcl from 'sjcl'
const $ = preconditions.singleton()

class CoreCopayer {
    version: number = 2
    createdOn: number = Math.floor(Date.now() / 1000)
    xPubKey: string
    id: string
    name: string
    requestPubKey: string
    signature: string
    requestPubKeys: any[]  
    addressManager: CoreAddressManager
    customData: any


    constructor(opts: CoreCopayerOpts) {
        $.checkArgument(opts.xPubKey, 'Missing copayer extended public key')
            .checkArgument(opts.requestPubKey, 'Missing copayer request public key')
            .checkArgument(opts.signature, 'Missing copayer request public key signature')

        opts.copayerIndex = opts.copayerIndex || 0

        this.xPubKey = opts.xPubKey
        this.id = CoreCopayer._xPubToCopayerId(this.xPubKey)
        this.name = opts.name
        this.requestPubKey = opts.requestPubKey
        this.signature = opts.signature
        this.requestPubKeys = [{
            key: opts.requestPubKey,
            signature: opts.signature,
        }]

        let derivationStrategy = opts.derivationStrategy || DERIVATION_STRATEGIES.BIP45
        if (CoreAddressManager.supportsCopayerBranches(derivationStrategy)) {
            this.addressManager = new CoreAddressManager({
                derivationStrategy: derivationStrategy,
                copayerIndex: opts.copayerIndex,
            })
        }

        this.customData = opts.customData    
    }


    createAddress(wallet: CoreWallet, isChange: boolean) {
        $.checkState(wallet.isComplete()) 

        let path = this.addressManager.getNewAddressPath(isChange)
        let address = CoreAddress.derive(wallet.id, wallet.addressType, wallet.publicKeyRing, path, wallet.m, wallet.network, isChange)
        return address
    }


    static fromObj(obj: any): CoreCopayer {
        var x = new CoreCopayer({
            name: obj.name,
            xPubKey: obj.xPubKey,
            requestPubKey: obj.requestPubKey,
            signature: obj.signature
        })

        x.version = obj.version
        x.createdOn = obj.createdOn
        x.id = obj.id

        if (x.version == 1) {
            x.requestPubKeys = [{
                key: x.requestPubKey,
                signature: x.signature,
            }]
            x.version = 2
        } else 
            x.requestPubKeys = obj.requestPubKeys
        

        if (obj.addressManager) 
            x.addressManager = CoreAddressManager.fromObj(obj.addressManager)
        
        x.customData = obj.customData

        return x
    }

    private static _xPubToCopayerId(xpub) {
        var hash = sjcl.hash.sha256.hash(xpub)
        return sjcl.codec.hex.fromBits(hash)
    }

}



class CoreCopayerOpts {
    copayerIndex?: number
    xPubKey: string
    name: string
    requestPubKey: string
    signature: string
    derivationStrategy?: DERIVATION_STRATEGIES
    customData?: any
}


export default CoreCopayer