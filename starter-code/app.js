const express = require('express');
const app = express();

const host = '127.0.0.1';
const port = 3000;

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`);
});

app.get('/gallery', (req, res) => {
  res.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(port, () => {
  console.log(`${host}:${port} listening...`);
});
