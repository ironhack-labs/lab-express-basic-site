const express = require('express');
const app = express();
var hbs = require('hbs');
app.use(express.static('public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/history', (req, res) => {
  res.render('history');
});
app.listen(3000, () => {
  console.log('listening on port', 3000);
});

