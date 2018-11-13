const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(`${__dirname}/public/views/index.html`);
});
app.get('/about', (request, response, next) => {
  console.log(request);
  response.sendFile(`${__dirname}/public/views/about.html`);
});
app.get('/gallery', (request, response, next) => {
  console.log(request);
  response.sendFile(`${__dirname}/public/views/gallery.html`);
});
app.get('/CSS', (request, response, next) => {
  console.log(request);
  response.sendFile(`${__dirname}/public/CSS/styles.css`);
});

app.listen(3000, () => {
  console.log('Server ready');
});
