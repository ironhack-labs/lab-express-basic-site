// set directories 

const express = require("express");
const hbs = require("hbs");

// initialise app object 

const app = express(); 

// do app config 

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

console.log(__dirname + "/public")
//setup app routes 

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});

app.get("*", (req, res) => {
    res.send("sorry no found");
});

// kick start the web server 

app.listen(3000, () => {
    console.log("ready @ http://localhost:3000");
})