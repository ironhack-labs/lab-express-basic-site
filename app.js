const express = require ('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/homepage.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
    console.log("Get About");
});

app.get('/work', (req, res) => {
    res.sendFile(__dirname + '/views/work.html');
    console.log("Get Work");
});

app.listen(3000, () => {
    console.log('Welcome to page of Jan Frodeno')
});