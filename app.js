const { request, response } = require("express");
const express = require("express");

const app = express();


app.use(express.static("public"));
app.use(express.static("views"));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(5000, () => {
    console.log("App listening on port 5000!")
}) 