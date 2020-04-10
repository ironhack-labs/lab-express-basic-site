const express = require('express');
const app = express();

// All static images are on public folder
app.use(express.static('public'));

// Route for Home
app.get('/home', (request, response) => {
    response.sendFile(`${__dirname}/views/home.html`);
});

// Route for Works
app.get('/works', (request, response) => {
    response.sendFile(`${__dirname}/views/works.html`);
});

// Route for About
app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`);
});

// Route for Photo Gallery
app.get('/pics', (request, response) => {
    response.sendFile(`${__dirname}/views/pics.html`);
});

app.listen(9000, () => console.log('My second app is listening'));