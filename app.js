const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.send("<h1>Home<h1>")
  // console.log(request);
  // response.sendFile(__dirname + '/views/home-page.html');
});
app.get('/about', (request, response, next) => { response.send("<h1>About<h1>") })
app.get('/gallery', (request, response, next) => { response.send("<h1>Gallery<h1>") })

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});