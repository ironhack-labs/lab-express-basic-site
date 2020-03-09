const express = require('express');
const app = express();
var hbs = require('hbs');
var films = require('./filmlist.json');

app.use(express.static('public'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) =>{
    res.render('about');
})

app.get('/works', (req, res) => {
    res.render('works');
})

app.get('/photogallery', (req, res) => {
    res.render('photogallery');
})

app.get('/works/filmlist', (req, res) => {
  res.render('thefilmlist', {filmlisthbs: films});
});


app.listen(3000, () => {
  console.log('My first app listening on port 3000.');
});