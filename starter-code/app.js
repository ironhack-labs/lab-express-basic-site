const express = require("express");
const app = express(); 

app.use(express.static('public'));


//entering the main site 
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/photo-gallery', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/photo-gallery.html');
});


app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});