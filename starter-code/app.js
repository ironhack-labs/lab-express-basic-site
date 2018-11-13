const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route

app.get('/', (request, response, next) => {
  response.sendfile(__dirname + '/views/index.html');
});
app.get('/about', (request, response, next) => {
  response.sendfile(__dirname + '/views/about.html');
});
app.get('/photo', (request, response, next) => {
  response.sendfile(__dirname + '/views/photo.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
}); 




