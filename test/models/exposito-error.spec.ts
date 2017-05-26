import * as chai from 'chai'
import { ExpositoError, ErrorCode } from '../../models/exposito-error'


describe('ExpositoError', () => {


    beforeEach(() => {

    })

    it('keeps the right ErrorCode', async () => {
        let error = new ExpositoError(ErrorCode.UNKNOWN)
        let invWalletError = new ExpositoError(ErrorCode.INVALID_WALLET, 'Test')

        chai.assert.strictEqual(error.code, ErrorCode.UNKNOWN)
        chai.assert.strictEqual(invWalletError.code, ErrorCode.INVALID_WALLET)
    })

    it('has a default error message', async () => {
        let error = new ExpositoError(ErrorCode.UNKNOWN)

        chai.assert.notEqual(error.message, '')
    })

    it('overwrights the default error message if provided in constructor', async () => {
        let customMessage = 'Custom message!'
        let error = new ExpositoError(ErrorCode.UNKNOWN, customMessage)

        chai.assert.strictEqual(error.message, customMessage)
    })

})