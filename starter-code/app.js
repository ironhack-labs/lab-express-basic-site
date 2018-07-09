const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

let data = {};

for (let n = 1; n <=20; n++) {
  Object.defineProperty(data, `image${n}`, {
    value: `/images/gallery/thumbs/asc${n}.jpg`,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
console.log(data);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (request, response, nextFunction) => {
  response.render('index');
});

app.get('/about', (request, response, nextFunction) => {
  response.render('about');
});

app.get('/gallery', (request, response, nextFunction) => {
  response.render('gallery', data);
});


app.listen(3000, () => {
  console.log('server listening at localhost port 3000');
  console.log(__dirname);
});