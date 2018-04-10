'use strict'

const express = require('express');
const app = express();

// Make everything inside of public/ available - middlewear
app.use(express.static('public'));


// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });

