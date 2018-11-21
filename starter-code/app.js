const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html')
});

app.get('/about-me', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-me.html')
});

app.get('/contact', (request, response, next) => {
  response.sendFile(__dirname + '/views/contact.html')
});


app.listen(3001, () => {
  console.log('My first app listening on port 3001!')
});