const express = require('express');

const app = express();

//Look in public files first
app.use(express.static('public'));

//Adding some custom middleware
app.use((request,response,next)=>{
  console.log("Hit my custom middleware.",request.url);
  next();
})

//Try to match all other routes
app.get('/', (request, response, next) => {
  //Often times you will see "request" being called "req"
  //and "response" being called "res"
  //There's no difference.

  console.log("Got request in express app");
  //YOu can send a simple text message
  // response.send("Hello world from express app!");
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  // response.send("Hello from about page!");
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  // response.send("Hello from about page!");
  response.sendFile(__dirname + '/views/gallery.html');
});


app.get('*', (request, response, next) => {
  response.status(404);
  response.send("Got lost");
})
app.listen(3000);