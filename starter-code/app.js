const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, resp, next) => {
  resp.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, resp, next) => {
  resp.sendFile(__dirname + '/views/about.html');
});

app.get('/photo', (req, resp, next) => {
  resp.sendFile(__dirname + '/views/photo.html');
});

app.listen(3000, () => console.log('server is running'));
