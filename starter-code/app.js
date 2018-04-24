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
*/


app.get('/', (request, response, next) => { // Home Route
  console.log(request);
  response.send('<h1>Welcome to my Express.js site:)</h1>');
});





// Server
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});