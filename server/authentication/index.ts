import * as passport from 'passport'
import { User } from 'models'


function login(req, res){
  res.render('login')
}

function initialize(app) {
    app.use(passport.initialize())
    app.use(passport.session())

    passport.serializeUser(function(user: User, cb) {
      cb(null, { userId: user._id, id: user._id });
    })

    passport.deserializeUser(function(obj, cb) {
      console.log(`deserializeUser: `, obj)
      cb(null, obj);
    })

}

export { login, initialize }
