const express = require('express');

const app = express();


app.use(express.static('public'));


// our first Route:
app.get('/', (req, res, next) => {

    res.sendFile(__dirname + '/views/homepage.html');

  });

app.get('/about', (req, res, next) => {

    res.sendFile(__dirname + '/views/about.html');

  });

app.get('/photos', (req, res, next) => {

    res.sendFile(__dirname + '/views/photos.html');

  });







// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });