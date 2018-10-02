const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Recipe = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  prep: {
    type: Date,
    required: true, 
  },
  cook: {
    type: Date,
    required: true,
  },
  level: {
    type: String,
    enum: ['intermediate', 'easy', 'more_effort'],
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: String,
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = mongoose.model('Recipe', Recipe);
