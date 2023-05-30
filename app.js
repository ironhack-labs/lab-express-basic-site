const express = require ("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/views/about-page.html");
});

app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + "/views/works-page.html");
});

app.listen(3001, () => {
    console.log("server listening on port 3001...");
});