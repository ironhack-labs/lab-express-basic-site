// When you want to run the code --> go to terminal and type denode app.js --> enter

const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendfile(__dirname + '/views/home-page.html')
});

app.get('/about', (req, res) => {
    res.sendfile(__dirname + '/views/about.html')
});

app.get('/hobbies', (req, res) => {
    res.sendfile(__dirname + '/views/hobbies.html')
});

app.get('/photo-gallery', (req, res) => {
    res.sendfile(__dirname + '/views/photo-gallary.html')
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});