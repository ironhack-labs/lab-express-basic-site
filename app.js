const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html')
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html')
});

app.listen(5000, () => {
    console.log('Server port:5000 is here');
});