/* eslint-disable no-console */
const express = require('express');
const books = require('./public/js/books.js');

const app = express();

app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

app.get('/', (request, response, next) => {
    console.log(`We recieved a new request in route ${request.url}`);

    response.render('home');
});

app.get('/about', (request, response, next) => {
    console.log(`We recieved a new request in route ${request.url}`);

    response.render('about');
});

app.get('/works', (request, response, next) => {
    console.log(`We recieved a new request in route ${request.url}`);

    response.render('works', {
        books,
    });
});

app.listen(3000, () => {
    console.log('App running on PORT 3000');
});
