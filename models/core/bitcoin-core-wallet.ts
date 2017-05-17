import {NETWORKS, DERIVATION_STRATEGIES, SCRIPT_TYPES} from './constants'
import * as Uuid from 'uuid'
import * as _ from 'lodash'
import CoreAddress from '../../models/core/address'
import CoreAddressManager from '../../models/core/address-manager'
import * as preconditions from 'preconditions'
const $ = preconditions.singleton()


class BitcoinCoreWallet {
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
    addressManager: CoreAddressManager
    
    // Is this property used?
    scanning: boolean

    
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
      this.addressManager = new CoreAddressManager({
        derivationStrategy: this.derivationStrategy
      })
      this.scanStatus = null


    }


    /**
     * Get the maximum allowed number of required copayers.
     * This is a limit imposed by the maximum allowed size of the scriptSig.
     * @param {number} totalCopayers - the total number of copayers
     */
    getMaxRequiredCopayers(totalCopayers: number): number {
        return BitcoinCoreWallet.COPAYER_PAIR_LIMITS[totalCopayers]
    }

    verifyCopayerLimits(m: number, n: number): boolean {
        return (n >= 1 && n <= 15) && (m >= 1 && m <= n);
    }

    isShared(): boolean {
        return this.n > 1
    }


    addCopayer(copayer): void {

        this.copayers.push(copayer)
        if (this.copayers.length < this.n) return

        this.status = 'complete'
        this._updatePublicKeyRing()
    }


    addCopayerRequestKey(copayerId, requestPubKey, signature, restrictions, name): void {
        $.checkState(this.copayers.length == this.n)

        var c = this.getCopayer(copayerId)

        //new ones go first
        c.requestPubKeys.unshift({
            key: requestPubKey.toString(),
            signature: signature,
            selfSigned: true,
            restrictions: restrictions || {},
            name: name || null,
        })
    }    


    getCopayer(copayerId) {
        return _.find(this.copayers, {
            id: copayerId
        })
    }  

    getNetworkName(): NETWORKS {
        return this.network
    }

    isComplete(): boolean {
        return this.status == 'complete'
    }

    isScanning(): boolean {
        return this.scanning
    }

    createAddress(isChange): CoreAddress {
        $.checkState(this.isComplete())

        var self = this

        var path = this.addressManager.getNewAddressPath(isChange)
        var address = CoreAddress.derive(self.id, this.addressType, this.publicKeyRing, path, this.m, this.network, isChange)
        return address
    }   


    toObject(): any {
        let x = _.cloneDeep<any>(this)
        x.isShared = this.isShared()
        return x
    }      


    _updatePublicKeyRing(): void {
        this.publicKeyRing = _.map(this.copayers, function(copayer) {
            return _.pick(copayer, ['xPubKey', 'requestPubKey'])
        })
    }    


    static fromObj(obj: BitcoinCoreWallet): BitcoinCoreWallet {
        let x = new BitcoinCoreWallet({
          id: obj.id,
          name: obj.name,
          m: obj.m,
          n: obj.n,
          singleAddress: obj.singleAddress,
          pubKey: obj.pubKey,
          network: obj.network
        })

        Object.assign(x, obj)

        x.addressManager = obj.addressManager ? CoreAddressManager.fromObj(obj.addressManager) : null

        return x
    }

    static COPAYER_PAIR_LIMITS: Array<number> = []

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


export { BitcoinCoreWallet }