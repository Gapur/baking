const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    validate: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 16,
    required: true
  },
  role: {
    type: String,
    enum: ['Client', 'Admin'],
    default: 'Client'
  },
}, { versionKey: false });

// Saves the user's password hashed (plain text password storage is not good)
UserSchema.pre('save', function (done) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return done(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return done(err);
        user.password = hash;
        done();
      });
    });
  } else return done();
});

// Create method to compare password input to password saved in database
UserSchema.methods.comparePassword = function(pw, done) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) return done(err);
    done(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
