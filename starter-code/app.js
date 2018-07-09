const express = require('express');
const app = express();

document.getElementById("heat").style.display = null;


app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about-us.html')
});

app.get('/galley', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html')
});

app.listen(3000, () => {
  console.log('listen to port 3000')
});