const express = require('express')
const app = express()
app.use(express.static('public'));
app.set('view engine', 'hbs');
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get(['/home', "/"], function (req, res) {
  res.render('home.hbs')
})

app.get('/about', function (req, res) {
  res.render('about.hbs')
})

app.get('/contact', function (req, res) {
  res.render('contact.hbs')
})
 
app.listen(3000)