const passportJWT = require("passport-jwt");
const User = require("./api/models/user");
const config = require('../config/config');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  secretOrKey: config.passportJWT.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
};

module.exports = function() {  
  const strategy = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findOne({ id: payload.id }, (req, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, { user: user });
      } else {
        return done(new Error("User not found"), null);
      }
    });
  });

  passport.use(strategy);

  return {
    initialize: () =>  passport.initialize(),
    authenticate: () => passport.authenticate("jwt", config.passportJWT.jwtSession),
  };
};
