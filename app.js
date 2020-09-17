const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs");
const get = require("http");

// Exported Data
const oeuvre = require("./data.js").oeuvre
console.log(oeuvre[1])
// create path to public and views which are the website ''data''
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");
console.log('----------------');


app.get("/", (request, response) => {
    response.render("home");
});

app.get("/about", (request, response) => {
    response.render("about")
});

app.get("/works", (request, response) => {
    response.render("work", {
        oeuvre
    })
});
app.listen(8080, () => {
    console.log('Yoo the server is ready poulet !')
});
