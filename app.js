const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname+"/views");
app.set("view engine", "hbs");

app.get(["/","/home"], (req, res) => {
    res.render("home");
})

app.get("/about", (request, res) => {
    res.render("about");
} );

app.get("/works", (request, res) => {
    res.render("works");
} );

app.get("/gallery", (request, res) => {
    res.render("gallery");
} );

app.listen(3000, () => { 
    console.log("server is ready @ localhost:3000");
})

