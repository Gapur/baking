const express = require('express');
const authRoutes = require('./auth');
const noteRoutes = require('./note');

const apiRoutes = express.Router();

module.exports = (app, mongoose, auth) => {
  app.use('/api', authRoutes(mongoose, apiRoutes, auth));
  app.use('/api', noteRoutes(mongoose, apiRoutes, auth));
};
