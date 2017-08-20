import * as passport from 'passport'
import * as bearerToken from 'express-bearer-token'
import { User } from 'models'
import { TokenProvider } from '../providers/token-provider'

let tokenProvider = new TokenProvider()


function login(req, res){
    res.render('login')
}

function initialize(app) {
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(bearerToken())

    passport.serializeUser(function(user: User, cb) {
      cb(null, { userId: user._id, id: user._id });
    })

    passport.deserializeUser(function(obj, cb) {
      //console.log(`deserializeUser: `, obj)
      cb(null, obj);
    })

}


async function validateToken(req: any) {
    if (!req.token)
        return false

    let token = req.token
    let validation = await tokenProvider.getTokenInfo(token)

    if (validation.isValid) {
        req.user = { id: validation.userId }
        return true
    }
    else
        return false
}


export async function hasAccess(req, res, next) {

    // if user is authenticated in the session or with token, carry on 
    if (await validateToken(req) || req.isAuthenticated())
        return next()

    // if they aren't redirect them to the home page
    res.status(403).json({})
}

export { login, initialize }

