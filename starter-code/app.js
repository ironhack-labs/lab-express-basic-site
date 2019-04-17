const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


app.get('/', (request, res, next) => res.render('index'));
app.get('/about', (request, res, next) => res.render('about'));
app.get('/gallery', (request, res, next) => res.render('gallery'));

app.listen(3000);