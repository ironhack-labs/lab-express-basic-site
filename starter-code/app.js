const express = require('express');
const app = express();

app.use(express.static('public'));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res, next) => res.render("index"));
app.get("/about", (req, res, next) => res.render("about"));

app.get('/home', (request, response, next) =>
      response.sendFile(__dirname + '/views/home.html'))


    app.get('/gallery', (request, response, next) =>
      response.sendFile(__dirname + '/views/gallery.html'))

    app.get('/about', (request, response, next) =>
      response.sendFile(__dirname + '/views/about.html'))

app.listen(3000, () => console.log('My first app listening on port 3000! '));