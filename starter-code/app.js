
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

let data = {
  name: "Ironhacker",
  bootcamp: "IronHack WebDev",
};

app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

app.use(express.static('public'));

app.get('/', (request, response, nextFunction) => {
  response.render('index',data); 
});

app.get('/gallery', (request, response, nextFunction) => {
  response.render('gallery',data);
});

app.get('/about', (request, response, nextFunction) => {
  response.render('about', data);
});

app.listen(3000, () => {
  console.log('server listening at localhost port 3000');
  console.log( __dirname + '/views');
  console.log( __dirname + '/public');
});