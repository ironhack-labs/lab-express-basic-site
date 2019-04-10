const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/index', (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});

app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`);
});

app.get('/gallery', (request, response) => {
    response.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(600);
