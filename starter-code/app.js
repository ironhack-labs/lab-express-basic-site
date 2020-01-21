const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

//gallery page
app.get('/gallery', (req, res, next) => {
    res.sendFile(__dirname + '/views/gallery.html')
});

//about page
app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
});

//home page
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.listen(3000);