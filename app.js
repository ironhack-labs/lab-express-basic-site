const express = require('express');
const app = express();

app.use(express.static('public'))

// Define engine an folder for templates
app.set('views', `${__dirname}/views`);

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! http://localhost:3000/'));