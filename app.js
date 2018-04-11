const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
    response.sendfile(__dirname + "/views/home-page.html");
});

app.get('/about', (request, response, next) => {
    response.sendfile(__dirname + "/views/about-page.html");
});

app.get('/photo-gallery', (request, response, next) => {
    response.sendfile(__dirname + "/views/photo-gallery.html");
});


app.listen(3030, ()=> {
    console.log("Server ready")
});