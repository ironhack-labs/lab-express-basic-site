const express = require("express");
const { request, response } = require("express");

const app = express();

app.use(express.static("public"));

app.get("/index", (request, response) => {
    response.sendFile(__dirname + "/plubic/views/index.html");
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (request, response) => {
    response.sendFile(__dirname + "/public/views/works.html");
});

app.get("/photogallery", (request, response) => {
    response.sendFile(__dirname + "/public/views/photogallery.html");
});

app.listen(3000, () => console.log("port 3000"));