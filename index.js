const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.sendfile(__dirname +'/views/home.html');
});

app.get('/about', (req, res, next) => {
    res.sendfile(__dirname +'/views/about.html');
});

app.get('/gallery', (req, res, next) => {
    res.sendfile(__dirname +'/views/gallery.html');
});

app.listen('3000', () => {
    console.log("I am listening to a basic express server")
})