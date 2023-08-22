const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + '/views/homepage.html');
})

app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
})

app.get("/work", (request, response, next) => {
    response.sendFile(__dirname + '/views/work.html');
})

app.get("/gallery", (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html')
})

app.listen(5000, () => console.log("My app listening on port 5000"))