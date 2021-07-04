const jwt = require('jsonwebtoken');
const config = require('../../config/config');

module.exports = function(mongoose, router, auth) {
  const User = mongoose.model("User");

  router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!user) {
        res.status(400).json({ error: "User not found." });
      } else {
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            const payload = { id: user._id };
            const token = jwt.sign(payload, config.passportJWT.jwtSecret, {
              expiresIn: "10h",
            });
            const data = {
              email: user.email,
            }
            res.json({ user: data, token: 'JWT ' + token });
          } else {
            res.status(401).json({ error: "Passwords did not match." });
          }
        });
      }
    });
  });

  router.post('/signup', (req, res) => {
    if (!req.body.email || !req.body.password) {
      res.status(400).json({ error: 'Please enter email or password.' });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
      });

      newUser.save((err) => {
        if (err) {
          res.status(400).json({ error: 'That email address already exists.' });
        }
        res.status(201).json({ message: 'Successfully created new user.' });
      });
    }
  });

  router.delete('/logout', (req, res) => {
    res.json({ token: null });
  })

  router.get('/users', auth.authenticate(), (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ users });
      }
    });
  });

  return router;
};
