const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('sushi time')
});

// Make everything inside of public/ available
app.use(express.static('public'));


// our first Route:
app.get('/home-page', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});



// makes a new page
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// gallery route:
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

