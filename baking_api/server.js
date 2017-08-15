const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const mongoose = require('mongoose');
const app = express();

const port = 8000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/BakingDb'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./api/controllers/noteController')(app);

app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
