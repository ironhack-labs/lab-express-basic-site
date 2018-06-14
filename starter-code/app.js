//Request express
const express = require('express');

// Express server handling requests and responses
const app = express();

//Make the public folder available
app.use(express.static('public'));

//First route
app.get('/', (request, response, next) => {
  console.log(request);
  response.send('Anything here is ok');
})

//Server started
app.listen(3000, () => {
  console.log("First app listening on port 3000");
})