
const express = require('express');
const app = express();

app.use("/photo-gallery", express.static('public'));


app.get('/', (req, res, next) =>  {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res, next) =>  {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/photo-gallery', (req, res, next) =>  {
  res.sendFile(__dirname + '/views/photo-gallery.html');
});


app.listen(3000, () => {
    console.log("i'm listening")
  })