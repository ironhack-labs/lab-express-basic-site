const express = require("express");
const app = express();
const PORT = 3000;

app.get("/homepage", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/about-us", (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/photo-gallery", (req, res) => {
    res.sendFile(__dirname + '/views/photo.html');
});

app.listen(PORT, function () {
    console.log(`I am listening on port ${PORT}`);
});


