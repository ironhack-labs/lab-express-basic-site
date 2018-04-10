const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/inicio.html');
});

app.get('/dragonball', (req, res) => {
  res.sendFile(__dirname + '/views/dragonBall.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.listen(7777, () => {
    console.log('My first app listening on port 7777!');
  });