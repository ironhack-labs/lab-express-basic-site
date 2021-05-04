const express = require('express');
const app = express();
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
    console.log('GET request - home page')
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about-page.html');
    console.log('GET request - about page')
});

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works-page.html')
    console.log('GET request - works page')
});

app.listen(3000, () => {
    console.log('server has started');
});