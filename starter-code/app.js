const express = require('express');
const hbs     = require('hbs');

const app = express();
app.use(express.static('public'));
// creates an absolute path pointing to a folder called "views"
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  let dataIndex = {
    name: "Ironhacker",
    bootcamp: "IronHack <b>WebDev</b>",
    img: "https://safeimage.vusercontent.com/?url=http%3A%2F%2Fgifs%2Egifme%2Eio%2Fi%2Fe7f8afef37%2Egif",
    default: "https://media.giphy.com/media/20k1punZ5bpmM/giphy.gif"
  };

  //res.sendFile(__dirname + '/views/index.html')
  res.render('index', dataIndex);
})

app.get('/about', (req, res, next) => {
  //res.sendFile(__dirname + '/views/about.html')
  res.render('about');
})

app.get('/gallery', (req, res, next) => {
  //res.sendFile(__dirname + '/views/gallery.html')
  res.render('gallery');
})

app.listen(3000, () => {
  console.log('Running on 3000')
})