const config = require('../../config/config');
const jwt = require('jsonwebtoken');

module.exports = function(app, mongoose, auth) {
  const User = mongoose.model("User");

  app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.status(400).json({ success: false, error: err.message });
      } else if (!user) {
        res.status(400).json({ success: false, error: "User not found." });
      } else {
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            const payload = { user: user };
            const token = jwt.sign(payload, config.passportJWT.jwtSecret);
            res.json({ success: true, message: "ok", token: token });
          } else {
            res.status(401).json({ success: false, message: "Passwords did not match." });
          }
        });
      }
    });
  });

  app.post('/signup', (req, res) => {
    if (!req.body.email || !req.body.password) {
      res.status(400).json({ success: false, message: ' Please enter email or password.' });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
      });

      newUser.save((err) => {
        if (err) {
          res.status(400)
            .json({ success: false, message: 'That email address already exists.' });
        }
        res.status(201).json({ success: true, message: 'Successfully created new user.' });
      });
    }
  });

  app.get('/user', (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        res.json({ users });
      }
    });
  });
};
