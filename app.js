const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about-page", (req, res, next) => {
    res.sendFile(__dirname + "/views/about-page.html");
});

app.get("/works-page", (req, res, next) => {
    res.sendFile(__dirname + "/views/works-page.html");
});

app.get("/photo-gallery", (req, res, next) => {
    res.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(3000, () => {
    console.log("start using my port please")
});