const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
const jwt = require('jsonwebtoken');
const auth = require('./passport/auth');

//load environment
const environment = process.env.NODE_ENV || "local";
const config = require('./config/config')[environment];
console.log("Using Environment: " + config.environment);

//setup Mongoose
mongoose.Promise = global.Promise;
const dbUrl = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`;
mongoose.connect(dbUrl, (err) => {
  if (err) throw err;
  console.log("Mongoose connection successful.");
});

//register each model with Mongoose
require('./api/models/note');

//setup Express
const app = express();

//setup body parser so we can access req.body in controllers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// include controllers
require('./api/controllers/note')(app, mongoose);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

// start Express
app.listen(config.server.port, () => {
  console.log(`Web server running on port ${config.server.port}.`);
});
