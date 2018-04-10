
const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/mr-x', (req, res) => {
  res.sendFile(__dirname + '/views/mr-x.html');
});

app.get('/photo', (req, res) => {
  console.log(req);
  res.send('<h1>photo. :)</h1>');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});
