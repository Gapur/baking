const passport = require('passport');
const passportJWT = require("passport-jwt");
const User = require("../api/models/user");
const config = require('../config/config');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  secretOrKey: config.passportJWT.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
};

module.exports = function() {  
  const strategy = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, { id: user._id });
      } else {
        return done(new Error("User not found"), false);
      }
    });
  });

  passport.use(strategy);

  return {
    initialize: () =>  passport.initialize(),
    authenticate: () => passport.authenticate("jwt", config.passportJWT.jwtSession),
  };
};
