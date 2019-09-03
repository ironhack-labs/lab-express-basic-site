const express = require('express');

const app = express();

// Look in public files first 
app.use(express.static('public'));

/* // Adding some custom middleware
app.use((request, response, next) => {
  console.log('Hit my custom middleware.', request.url);
  next(); */
// });

// Try to match all other routes
app.get('/', (request, response, next) => {
  
  console.log('Got request in express app');
  
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  
  response.sendFile(__dirname + '/Views/about.html');
});

app.get('/photo-gallery', (request, response, next) => {
  
  response.sendFile(__dirname + '/views/gallery.html');
});


app.get('*', (request, response, next) => {
  console.log('User hit error page', request.url);
  response.status(404);
  response.send('Got lost');
});

app.listen(3000);