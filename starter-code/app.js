const express = require('express')

// We create our own server named app
// Express server handling requests and responses
const app = express()
const port = 3000

app.use(express.static('public'))

// our first Route
app.get('/', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + '/views/gallery.html');
});

// Server Started
app.listen(port, () => {
  console.log(`My first app listening on port ${port}`)
});