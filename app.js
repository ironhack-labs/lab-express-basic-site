// Instanciamos express -------------------------------------------------------------
const { response } = require('express');
const express = require('express');
const app = express();


const hbs = require('hbs'); 
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

//Create static server for files, like css, imgs, and js
app.use(express.static(path.join(__dirname, 'public')));

// Configure handlebars
app.set('view engine', 'hbs');
// Add the route handlers here:
app.set('views', path.join(__dirname, 'views'));

// Register the location for handlebars partials here:

//hbs.registerPartials(__dirname + '/views/partials');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// ENDPOINTS

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/memes', (req, res) => {
  res.render('memes');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/works', (req, res) => {
  res.render('works');
});



// ADD PORT ------------------------------------------------------------------------------

app.listen(3000, () => console.log('🏃‍ on port 3000'));