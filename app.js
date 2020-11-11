const { response } = require('express');
const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
})



app.listen(3000, () => {
    console.log("Server listening! on port 3000")
});
