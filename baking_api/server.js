const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
const jwt = require('jsonwebtoken');
const cors = require('cors');
const winston = require('winston');
const morgan = require('morgan');
const auth = require('./passport/passport')();

//load environment
const environment = process.env.NODE_ENV || "local";
const config = require('./config/config')[environment];
winston.info("Using Environment: " + config.environment);

//setup Mongoose
mongoose.Promise = global.Promise;
const dbUrl = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`;
mongoose.connect(dbUrl, (err) => {
  if (err) throw err;
  console.log("Mongoose connection successful.");
});

//register each model with Mongoose
require('./api/models/note');
require('./api/models/user');

//setup Express
const app = express();

//setup body parser so we can access req.body in controllers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//log requests to console
app.use(morgan('combined'));

//setup passport
app.use(auth.initialize());

// include controllers
require('./api/controllers/note')(app, mongoose, auth);
require('./api/controllers/auth')(app, mongoose, auth);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

// start Express
app.listen(config.server.port, () => {
  console.log(`Web server running on port ${config.server.port}.`);
});
