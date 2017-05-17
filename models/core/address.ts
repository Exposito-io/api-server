import {NETWORKS, DERIVATION_STRATEGIES, SCRIPT_TYPES} from './constants'
import * as Bitcore from 'bitcore-lib'
import * as _ from 'lodash'
import * as preconditions from 'preconditions'
const $ = preconditions.singleton()


class CoreAddress {
    version: string = '1.0.0'
    createdOn: number = Math.floor(Date.now() / 1000)
    address: string
    walletId: string
    isChange: boolean
    path: string
    publicKeys: string[]
    network: NETWORKS
    type: SCRIPT_TYPES = SCRIPT_TYPES.P2SH
    hasActivity: boolean = undefined


    constructor(opts: CoreAddressOpts) {
        this.address = opts.address
        this.walletId = opts.walletId
        this.isChange = opts.isChange
        this.path = opts.path
        this.publicKeys = opts.publicKeys
        this.network = Bitcore.Address(this.address).toObject().network
        this.type = opts.type || SCRIPT_TYPES.P2SH
        
    }


    static derive(walletId, scriptType, publicKeyRing, path, m, network, isChange) {
        var raw = CoreAddress._deriveAddress(scriptType, publicKeyRing, path, m, network)
        return new CoreAddress(_.extend(raw, {
            walletId: walletId,
            type: scriptType,
            isChange: isChange,
        }))
    }


    private static _deriveAddress(scriptType, publicKeyRing, path, m, network): PartialCoreAddress {
        $.checkArgument(_.includes(_.values(SCRIPT_TYPES), scriptType))

        var publicKeys = _.map(publicKeyRing, function(item: any) {
            var xpub = new Bitcore.HDPublicKey(item.xPubKey)
            return xpub.deriveChild(path).publicKey
        })

        var bitcoreAddress
        switch (scriptType) {
            case SCRIPT_TYPES.P2SH:
                bitcoreAddress = Bitcore.Address.createMultisig(publicKeys, m, network)
                break
            case SCRIPT_TYPES.P2PKH:
                $.checkState(_.isArray(publicKeys) && publicKeys.length == 1)
                bitcoreAddress = Bitcore.Address.fromPublicKey(publicKeys[0], network)
                break
        }

        return new PartialCoreAddress(
            bitcoreAddress.toString(),
            path,
            _.invoke<string[]>(publicKeys, 'toString'),
        )
    }

    static fromObj(obj): CoreAddress {
        var x = new CoreAddress({ 
            address: obj.address,
            walletId: obj.walletId,
            isChange: obj.isChange,
            path: obj.path,
            publicKeys: obj.publicKeys,
            type: obj.type || SCRIPT_TYPES.P2SH
        })

        x.version = obj.version
        x.createdOn = obj.createdOn
        x.network = obj.network
        x.isChange = obj.isChange
        x.publicKeys = obj.publicKeys
        x.hasActivity = obj.hasActivity

        return x
    }
}


class CoreAddressOpts {
    address: string
    walletId: string
    isChange: boolean
    path: string
    publicKeys: string[]
    type?: SCRIPT_TYPES  
}

class PartialCoreAddress {
    address: string
    path: string
    publicKeys: string[]

    constructor(address: string, path: string, publicKeys: string[]) {
        this.address = address
        this.path = path
        this.publicKeys = publicKeys
    }
}



export default CoreAddress