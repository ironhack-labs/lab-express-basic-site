const express = require('express');
const app = express();

// Make assets directory accessible in public folder; all images, css, js files go here
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Send to home page (root)
    res.sendFile(`${__dirname}/views/home.html`);
});

app.get('/about', (req, res) => {
    // Send to about page
    res.sendFile(`${__dirname}/views/about.html`);
});

app.get('/gallery', (req, res) => {
    // Send to gallery page
    res.sendFile(`${__dirname}/views/gallery.html`);
});

// Make app listen to port 3000
app.listen(3000);