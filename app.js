const express = require('express');
const app = express();
app.use(express.static('./public'))

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about-page.html');
});

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery-page.html');
});

app.listen(3000, () => {
  console.log('This is a lab page')
})