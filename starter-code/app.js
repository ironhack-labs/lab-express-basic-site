const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const PORT = 1234;

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views/partials"));

console.log("hello", app);

app.get(["/", "/home"], (request, response) => {
    response.render("home");
});

app.get(["/aboutme"], (request, response) => {
    response.render("aboutme");
});

app.get(["/photogallery"], (request, response) => {
    response.render("photogallery");
});

app.listen(PORT, () => {
    console.log(`the app is listening at http://localhost:1234/`);
});