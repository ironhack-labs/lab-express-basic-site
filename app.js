const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();


// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route

  app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'))

  app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works-page.html'))

  app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about-page.html'))


  // ... the previously added code
// Server Started
app.listen(5000, () => console.log('My first app listening on port 5000! '));