const express = require("express");

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home.html');
});


app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });

  app.get('/album', (request, response, next) => {
    response.sendFile(__dirname + '/views/pictures.html');
  });


  app.listen(3000, () => {
    console.log('App is listening on port 3000!')
  });