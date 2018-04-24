// The express() function creates an Express application.

const express = require('express'); 

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

/*
get: the HTTP Verb needed to access this page
request: An object containing information about the request, such as the headers. More on this later.
response: An object containing information about the response, such as headers and any data we need to send to the client.
next: We will use this later to handle errors. Leave it there for now.
__dirname (two underscores) refers to the folder in which our app.js is located. 
*/

// Home Route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html'); 
});

// About Route
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// About Route
app.get('/photos', (request, response, next) => {
  response.sendFile(__dirname + '/views/photos.html');
});

// Server
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});