'use strict'

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const index = require('./routes/index');
const users = require('./routes/users');
const about = require('./routes/about');
const gallery = require('./routes/gallery');

const app = express();

//---View engine setup---
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//---Middlewares----
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//---Routes----
app.use('/', index);
app.use('/users', users);
app.use('/about', about);
app.use('/gallery', gallery);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
