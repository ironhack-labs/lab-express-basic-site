const express = require('express');
const app = express();
app.use(express.static('public'))

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/photo-gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});








app.listen(4000, () => {
  console.log('express is running on port 3000, have fun!')
});