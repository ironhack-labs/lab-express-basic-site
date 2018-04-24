const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Using port number 3000');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html");
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
})

