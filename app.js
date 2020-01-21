const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
    console.log('Request successful!');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
    console.log('Request successful!');
})

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
    console.log('Request successful!');
})

app.listen(3000, () => console.log('Server now open on port 3000! 💻'));