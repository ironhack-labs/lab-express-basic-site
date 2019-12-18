const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home-page.html');
});
app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});
app.get('/photo-gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/photo-gallery.html');
});
// app.get('/', (req, res) => {
//   res.send('<h1>Aquiiiii</h1>');
// });

app.listen(3000, () => console.log('server is running'));