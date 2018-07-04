// Require Express
const express = require('express');
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use("/", express.static('public'));

// our first Route
app.get('/', (req, res, next) =>  {
  res.sendFile(__dirname + '/views/home.html');
});


app.get('/about-us', (req, res, next) =>  {
  res.sendFile(__dirname + '/views/about-us.html');
});

app.get('/photo-gallery', (req, res, next) =>  {
  res.sendFile(__dirname + '/views/photo-gallery.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});