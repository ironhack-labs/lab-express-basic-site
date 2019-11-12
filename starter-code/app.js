const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/Home', (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
});

app.get('/Gallery', (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html")
});

app.get('/About', (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});