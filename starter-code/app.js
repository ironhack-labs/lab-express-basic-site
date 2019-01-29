const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(request, response) => {
  console.log(request.url)
  response.sendFile(__dirname + "/views/homepage.html"); 
});

app.get('/about',(request, response) => {
  console.log(request.url)
  response.sendFile(__dirname + "/views/about.html"); 
});

app.get('/gallery',(request, response) => {
  console.log(request.url)
  response.sendFile(__dirname + "/views/gallery.html"); 
});

app.listen(3000, () => {
  console.log('its working')
})