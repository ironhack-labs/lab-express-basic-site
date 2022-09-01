const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
// app.set('view engine', 'hbs');

app.get('/', (req, resp) => {
  resp.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, resp) => {
  resp.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, resp) => {
  resp.sendFile(__dirname + '/views/works.html')
});

app.get('/photoGallery', (req, resp) => {
  resp.sendFile(__dirname + '/views/photoGallery.html');
});

app.listen (3000, () => {
  console.log('Server connected on port 3000');
})