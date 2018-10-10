const express = require ('express');
const app = express();
const port = 3000;

app.use(express.static('starter-code/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
});
app.listen(port, (error) => {
    error ? console.log(error) : console.log('running on 3000');
})