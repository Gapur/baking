const express = require('express');
const authRoutes = require('./auth');
const noteRoutes = require('./note');
const recipeRoutes = require('./recipe');

const router = express.Router();

module.exports = (app, mongoose, auth) => {
  app.use('/api', authRoutes(mongoose, router, auth));
  app.use('/api', noteRoutes(mongoose, router, auth));
  app.use('/api', recipeRoutes(mongoose, router, auth));
};
