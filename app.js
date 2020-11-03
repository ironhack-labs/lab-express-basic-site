const express = require('express');
const app = express();
const port = 5500;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html");
});

// module.exports = app;

app.listen(5500, () => console.log(`My first app listening on ${port}`));
