// const express = require('express');
// const app = express();

// // our first Route
// app.get('/home', (request, response, next) => {
//   console.log(request);
//   response.send('<h1>Welcome Ironhacker. :)</h1>')
// });

// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => response.send('<h1>Welcome Ironhacker. :)</h1>'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));