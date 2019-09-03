const express = require('express');
const app = express();

app.use(express.static('public'));

// app.use((request, response, next) => {
//   console.log('Hit my custom middleware.');
//   next();
// });

app.get('/',(request, response, next) => {
  console.log('Got home');
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about',(request, response, next) => {
  console.log('Got about');
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery',(request, response, next) => {
  console.log('Got gallery');
  response.sendFile(__dirname + '/views/gallery.html');
});

app.get('*',(request, response, next) => {
  console.log('404');
  response.status(404);
  response.send('<h1>Page 404</h1>');
});

app.listen(3000);
