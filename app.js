// Require Express
const express = require("express");
// Create express Object
const app = express();
// This is where static files are located
app.use(express.static("public"));

// Routes
app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
    response.render(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
    response.render(__dirname + "/views/works.html");
});

app.get("/photo-gallery", (request, response, next) => {
    response.render(__dirname + "/views/photo-gallery.html");
});

// Server started
app.listen(3000);

