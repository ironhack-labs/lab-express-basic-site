const express = require('express');
const morgan = require('morgan');

const logger = morgan('tiny');

// Express server handling requests and responses
const app = express(); // this is like the constructor

// set middleware
app.use(logger);
app.use(express.static('public')); // GET xyz.ext (ext = any extension)

// set routes
app.get('/', (req, res, next) => { // redirect to home.html
  res.writeHead('301', {Location: __dirname + '/public/views/home.html'});
  res.end();
  //res.sendFile( __dirname + '/public/views/home.html');
})
app.get('/home', (req, res, next) => {
  res.sendFile( __dirname + '/public/views/home.html');
})
app.get('/about', (req, res, next) => {
  res.sendFile( __dirname + '/public/views/about.html');
})
app.get('/gallery', (req, res, next) => {
  res.sendFile( __dirname + '/public/views/gallery.html');
})
app.get('/achievements', (req, res, next) => {
  res.sendFile( __dirname + '/public/views/achievements.html');
})

app.listen(3000, () => {
  console.log('Server running!');
})