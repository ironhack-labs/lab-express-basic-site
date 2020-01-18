
const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(process.env.PORT, () => console.log(`Running on port: ${process.env.PORT}`));
