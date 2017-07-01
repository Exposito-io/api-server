import * as jwt from 'jsonwebtoken'
import * as config from 'config'
let secrets = require(`../../../secrets/${process.env.NODE_ENV || 'default'}.json`)

const TOKEN_TTL = '365d' // expires in 365 days

/**
 * Provides tools to manipulate authentication tokens
 *
 */
export class TokenProvider {

    constructor() {
    }

    /**
     * Generates a token
     *
     */
    generateToken(data) {
      return jwt.sign(data, secrets.tokens, {
          expiresIn: TOKEN_TTL
      })
    }

    /**
     * Returns token information
     *
     * @param  {string} token
     * @return {Object}
     */
    getTokenInfo(token: string): Promise<{ isValid: boolean, userId?: string }> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secrets.tokens, (err, decoded) => {
                if (err) {
                    // TODO: handle error

                    return resolve({ isValid: false });
                } else {
                    resolve({
                        isValid: true,
                        userId: decoded.userId
                    })
                }
            })
        })

    }

}



