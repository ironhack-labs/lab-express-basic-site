const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');

});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');

});

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');

});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});