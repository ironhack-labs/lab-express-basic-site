const express = require('express');
const app = express();

//use static
app.use(express.static('public'));
//Home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
  });

//About
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
  });

//Photo Gallery
app.get('/movies', (req, res) => {
    res.sendFile(__dirname + '/views/movies.html');
  });

//listener
app.listen(3000, () => {
    console.log('localPort 3000 is ready!');
  });