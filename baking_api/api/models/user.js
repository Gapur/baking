const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    validate: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
}, { versionKey: false });

module.exports = mongoose.model('User', User);
