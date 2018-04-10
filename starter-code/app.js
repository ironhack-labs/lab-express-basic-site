const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home-page.html')
});

app.get('/Photo-gallery', (req,res) => {
  res.sendFile(__dirname + '/views/Photo-gallery.html')
});
app.get('/about', (req,res) => {
  res.sendFile(__dirname + '/views/about.html')
});


// Server Started
app.listen(3000, () => {
  console.log('Conected')
});

