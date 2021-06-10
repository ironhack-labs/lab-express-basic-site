//Load Express
const { response } = require("express");
const express = require("express");
const app = express();

//Use express for static content
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`);
});

app.get("/works", (req, res) => {
    res.sendFile(`${__dirname}/views/works.html`);
});

app.get("/gallery", (req, res) => {
    res.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(3000, () => {
    console.log("Server is active");
})