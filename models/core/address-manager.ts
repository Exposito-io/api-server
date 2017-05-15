import {NETWORKS, DERIVATION_STRATEGIES, BIP45_SHARED_INDEX} from './constants'
import * as _ from 'lodash'
import * as preconditions from 'preconditions'
const $ = preconditions.singleton()

class CoreAddressManager {

    version: number = 2
    derivationStrategy: DERIVATION_STRATEGIES = DERIVATION_STRATEGIES.BIP45
    receiveAddressIndex: number = 0
    changeAddressIndex: number = 0
    copayerIndex: number


    constructor(opts: CoreAddressManagerOpts = {}) {
        this.derivationStrategy = opts.derivationStrategy || DERIVATION_STRATEGIES.BIP45
        $.checkState(_.includes(_.values(DERIVATION_STRATEGIES), this.derivationStrategy))
        this.copayerIndex = _.isNumber(opts.copayerIndex) ? opts.copayerIndex : BIP45_SHARED_INDEX
    }


    rewindIndex(isChange, n) {
        n = _.isUndefined(n) ? 1 : n
        if (isChange) {
            this.changeAddressIndex = Math.max(0, this.changeAddressIndex - n)
        } else {
            this.receiveAddressIndex = Math.max(0, this.receiveAddressIndex - n)
        }
    }

    getCurrentAddressPath(isChange) {
        return 'm/' +
            (this.derivationStrategy == DERIVATION_STRATEGIES.BIP45 ? this.copayerIndex + '/' : '') +
            (isChange ? 1 : 0) + '/' +
            (isChange ? this.changeAddressIndex : this.receiveAddressIndex)
    }

    getNewAddressPath(isChange) {
        var ret = this.getCurrentAddressPath(isChange)
        this._incrementIndex(isChange)
        return ret
    }



    private _incrementIndex(isChange) {
        if (isChange) {
            this.changeAddressIndex++
        } else {
            this.receiveAddressIndex++
        }
    }


    static supportsCopayerBranches(derivationStrategy): boolean {
        return derivationStrategy == DERIVATION_STRATEGIES.BIP45
    }

    static fromObj(obj: any): CoreAddressManager {
        var x = new CoreAddressManager()

        x.version = obj.version
        x.derivationStrategy = obj.derivationStrategy || DERIVATION_STRATEGIES.BIP45
        x.receiveAddressIndex = obj.receiveAddressIndex
        x.changeAddressIndex = obj.changeAddressIndex
        x.copayerIndex = obj.copayerIndex

        return x
    }

}

class CoreAddressManagerOpts {
    derivationStrategy?: DERIVATION_STRATEGIES
    copayerIndex?: number
}


export default CoreAddressManager