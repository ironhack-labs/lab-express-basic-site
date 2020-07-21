const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/index.html')
});

app.get("/about", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/about.html');
});
app.get("/works", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/works.html');
});
app.get("/photog", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/photog.html');
});

const port = 3000;

app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
});