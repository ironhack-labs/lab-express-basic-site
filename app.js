
var express = require('express');
var app = express();
let port = 5000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send("home");
});
app.get('/about', function(req, res) {
    res.send("about");
  });
  app.get('/works', function(req, res) {
    res.send("works");
  });