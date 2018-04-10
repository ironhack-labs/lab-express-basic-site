// Step 1: require express
const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();


// Step 4 
// Make everything inside of public/ available

app.use(express.static('public'));

// Step 2: Set up routes: GET METHODS

// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});




// Step 3: Set a listener for the server on port 3000.
// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000! Hooray')
});


