const express = require('express');

const app = express();

app.use(express.static("public"));

app.get('/', (request, response, next) => {
    response.sendFile(`${__dirname}/views/home.html`);
});

app.get('/about', (req, response, next) => {
    response.sendFile(`${__dirname}/views/about.html`);
});

app.get('/works', (request, response, next) => {
    response.sendFile(`${__dirname}/views/works.html`);
});

app.get('/photo-gallery', (request, response, next) => {
    response.sendFile(`${__dirname}/views/photo-gallery.html`);
});


app.listen(3000, () => console.log('Running on port 3000.'));

