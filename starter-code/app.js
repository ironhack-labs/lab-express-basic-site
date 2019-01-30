const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(request, response) => {
  response.sendFile(__dirname + "/views/"); 
});

app.get('/about',(request, response) => {
  response.sendFile(__dirname + "/views/about.html"); 
});

app.get('/gallery',(request, response) => {
  response.sendFile(__dirname + "/views/gallery.html"); 
});

app.listen(2400, () => {

})