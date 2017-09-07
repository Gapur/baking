const express = require('express');
const authRoutes = require('./auth');
const noteRoutes = require('./note');

const router = express.Router();

module.exports = (app, mongoose, auth) => {
  app.use('/api', authRoutes(mongoose, router, auth));
  app.use('/api', noteRoutes(mongoose, router, auth));
};
