// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// home route
app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/views/home.html`);
});

// about route
app.get('/about', (req, res, next) => {
    res.sendFile(`${__dirname}/views/about.html`);
});

// gallery route
app.get('/gallery', (req, res, next) => {
    res.sendFile(`${__dirname}/views/gallery.html`);
});

// Server started
app.listen(3000, () => {
    console.log('Server running in port 3000');    
});