// Lab de express
const express = require("express");

const app = express();

app.use(express.static("public"));

// home
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`);
})

// about
app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

// works
app.get("/works", (req, res) => {
    res.sendFile(`${__dirname}/views/works.html`)
})

// gallery
app.get("/gallery", (req, res) => {
    res.sendFile(`${__dirname}/views/gallery.html`)
})

app.use("*", (req, res) => {
    res.write("Not found!!");
})

app.listen(3000, () => {
    console.log("Running...");
})