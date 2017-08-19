const config = require('../../config/config');

module.exports = function (app, mongoose, auth) {
  const User = mongoose.model("User");

  app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (req, user) => {
      if (err) {
				res.status(400).json({ success: false, error: err.message });
			} else if (!user) {
				res.status(400).json({ success: false, error: "User not found." });
			} else {
        if(user.password === req.body.password) {
          const payload = { user: user };
          const token = jwt.sign(payload, config.passportJWT.jwtSecret);
          res.json({ success: true, message: "ok", token: token });
        } else {
          res.status(401).json({ success: false, message: "Passwords did not match." });
        }
      }
    });
  });

  app.post('/signup', (req, res) => {
    
  });
};
