const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/photo', (req, res, next) => {
  res.sendFile(__dirname + '/views/photo.html');
});


app.listen(PORT, () => {
  console.info(`App listen at ${PORT}`);
});