const express = require('express');

// Create our own server named app
// Express server handling requests and responses
const app = express();


// Make everything inside of public/ available
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/views/index.html');
  });

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/public/views/works.html');
});

app.listen(3000);