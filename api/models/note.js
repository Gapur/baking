const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Note = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#fff',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = mongoose.model('Note', Note);
