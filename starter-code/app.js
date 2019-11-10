var express = require('express');
var app = express();

// creates an absolute path pointing to a folder called "views"
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


//con handlebars bigotitos

app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "<span>IronHack WebDev</span>"
  };
  res.render('index', data);
});

app.get('/gallery', (req, res, next) => {
  res.render('gallery');
});

app.get('/about', (req, res, next) => {
  const data = {
    name: 'Paca',
    job: 'astronaut',
    topics: ["Physics", "Math", "Algebra", "Calculus"]
  };
  res.render('about',data);
});


//con express normalito
/*
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});
*/

app.listen(3000);