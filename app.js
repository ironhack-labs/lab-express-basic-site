
const express = require("express");

// create the express app
const app = express();
// configure the public folder, for css js and .png
app.use(express.static("public"));

// configure handlebars
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// configure endpoints
app.get('/', (request, response, next) => {
    response.render(__dirname + '/views/home');
});

app.get('/about', (request, response, next) => {
    response.render(__dirname + '/views/about');
});

app.get('/works', (request, response, next) => {
    response.render(__dirname + '/views/works');
});

app.get('/gallery', (request, response, next) => {
    response.render(__dirname + '/views/gallery');
});

app.use((req, res, next) => {
    res.status(404);
    res.send("Not found :(");
});

app.listen(3000, () => {
    console.log("listening!");
});