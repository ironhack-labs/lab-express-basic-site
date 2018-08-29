
// Setup (configuration of your app)
// ----------------------------------------

const express = require("express");

const app = express();

app.use(express.static("public"));

// Route (content of your app)
// ----------------------------------------

// Express Route - defines a page of content on your website
app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (request, response, next) => {
    response.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {});
