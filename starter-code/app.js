const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });
app.use(express.static('public'));
// homepage route
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
  });
  
  //aboutpage route:
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });
// gallerypage route 
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
  });
  
  