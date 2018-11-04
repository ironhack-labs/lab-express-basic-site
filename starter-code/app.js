const express = require('express');

const app = express();


app.use(express.static('public'));





app.get('/', (req, res) => {
  console.log(req);
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html');
});

const port = 3000;

app.listen(port,() => {
  console.log(`Ready on port ${port}`);
})