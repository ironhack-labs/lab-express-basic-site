const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get(["/home"], (request, response) => {
    response.render('home')
  });

app.get(["/about"], (request, response) => {
    response.render('about')
});

app.get(["/works"], (request, response) => {
    response.render('works')
});

app.get(["/paris19"], (request, response) => {
    response.render('paris19')
});

app.get(["/gallery"], (request, response) => {
    response.render('gallery')
});

app.listen(3000, () => {
});