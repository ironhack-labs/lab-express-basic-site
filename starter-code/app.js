const express = require('express')
const app = express();

app.use(express.static("public"));

app.get("/",(request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/about",(request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + "/public/about.html");
});

app.get("/gallery",(request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + "/public/gallery.html");
});

app.listen(3300, () => {
    console.log("FOI!FOI!FOI!")
});