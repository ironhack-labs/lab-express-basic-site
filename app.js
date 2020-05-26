const express = require('express')
const app = express()
 
function ourMiddleWare(req, res, next) {
  console.log(__dirname);
  next();
}
app.use(ourMiddleWare);

app.use(express.static('public'));

// Home page
app.get('/home', function (req, res) {
  res.sendFile(__dirname + '/views/home.html');
});

// About page
app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/views/about.html');
});

// Works page
app.get('/works', function (req, res) {
  res.sendFile(__dirname + '/views/works.html');
});

// Gallery page
app.get('/gallery', function (req, res) {
  res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3002);
