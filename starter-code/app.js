const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/photo-gallery", (req, res) => {
    res.sendFile(__dirname + '/views/photo.html');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log(`I am listening on port ${PORT}`);
});


