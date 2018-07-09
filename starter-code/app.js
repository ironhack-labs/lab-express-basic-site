const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

let element = [];

for (let n = 1; n <=19; n++) {
  element.push({
    image: "/images/gallery/thumbs/asc" + n + ".jpg"
  });
}

console.log(element);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

app.get('/', (request, response, nextFunction) => {
  response.render('index');
});

app.get('/about', (request, response, nextFunction) => {
  response.render('about');
});

app.get('/gallery', (request, response, nextFunction) => {
  response.render('gallery', {
    element
  });
});



app.listen(3000, () => {
  console.log('server listening at localhost port 3000');
  console.log(__dirname);
});