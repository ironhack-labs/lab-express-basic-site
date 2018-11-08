
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');

//app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  let data = {
    name: "home"
  };
  res.render(data.name, data);
  //res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res, next) => {
  let data = {
    name: "about"
  };
  res.render(data.name, data);
  //res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res, next) => {
  let data = {
    name: "gallery"
  };
  res.render(data.name, data);
  //res.sendFile(__dirname + '/views/gallery.html');
});

const port = 3000;
app.listen(port,() => {
  console.log(`Ready on port ${port}`);
})
