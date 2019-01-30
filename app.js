const express = require('express');

const path = require('path');

const port = 3000;
const app = express();

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Set up para CSS
app.use(express.static('public'));

app.get('/home', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/photos', (req, res) => res.render('photos'));

// Listener

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
