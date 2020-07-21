const express = require("express");

const app = express();

// le decimos a express que sirva los archivos estáticos desde esta carpeta public
app.use(express.static("public"));

app.get("/", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/home.html')
});

app.get("/about", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/about.html');
});

app.get("/photo-gallery", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/photo-gallery.html');
});

app.get("/works", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/works.html');
});
const port = 3000;

app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
});
