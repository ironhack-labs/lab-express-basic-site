const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
/* app.get('/', (request, response, next) => {
  console.log(request);
  response.send('<html><h1>Welcome Clement</h1>;<script>alert("hello")</script>;</html>');
}); */

app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/gallery.html');
});


/* app.get('/gallery2', (request, response, next) => {
  console.log(request);
  let name = request.query.name;
  console.log(request.query.name);
  response.send(`<html><h1>Welcome ${name}. :)</h1><script>alert("hello")</script></html>`);
}); */

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

//display the html in browser http://localhost:3000/