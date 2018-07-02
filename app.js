const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  // console.log(reque  st);
  response.sendFile(__dirname + '/views/home.html');
});


app.get('/about-us', (req, res, next) => {
  res.sendFile(__dirname + '/views/about-us.html');
});

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html');
});


app.listen(3000, () => {
  console.log('Its up and running..');
});
