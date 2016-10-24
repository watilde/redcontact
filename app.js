var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan');
var path = require('path');
var marked = require('marked');
var fs = require('fs');
var logger = require('winston');
var indexController = require('./controllers/index');
var userController = require('./controllers/users');
var bodyParser = require('body-parser');
var app = express();

// Add middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', indexController);

// See the User Controller for `/users` routes
app.use('/users', userController);


// Some switches for acceptance tests
if (require.main === module) {
  // Only connect to MongoDB if app.js is run
  // If require'd (e.g. in tests), let these tests establish a DB connection themselves
  mongoose.connect('mongodb://localhost/users');

  // Only listen when app.js is run - acceptance tests will listen on another port
  app.listen(8000, function() {
    logger.info('Listening at http://localhost:8000 - see here for API docs');
  });
}

module.exports = app;
