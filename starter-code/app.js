
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

let title = {
    home: 'Home',
    about: 'About Us',
    gallery: 'Gallery'
}


app.get('/', (request, response, next) => {
    response.render('home', {title:title.home});
});

app.get('/about', (request, response, next) => {
    response.render('about', {title:title.about});
});

app.get('/gallery', (request, response, next) => {
    response.render('gallery', {title:title.gallery});
});
  

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});