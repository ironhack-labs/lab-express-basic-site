const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/work', (req, res) => {
  res.sendFile(__dirname + '/views/work.html');
});

app.listen(3000);
