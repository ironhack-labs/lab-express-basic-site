/* eslint-disable no-console */

const express = require('express');

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

    response.render('works');
});

app.get('/phrases.js', (request, response, next) => {
    console.log(`We recieved a new request in route ${request.url}`);

    response.sendFile(`${__dirname}/phrases.js`);
});

app.get('/alert.js', (request, response, next) => {
    console.log(`We recieved a new request in route ${request.url}`);

    response.sendFile(`${__dirname}/alert.js`);
});

app.listen(3000, () => {
    console.log('App running on PORT 3000');
});