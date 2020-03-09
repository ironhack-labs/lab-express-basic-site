const express = require("express");
const app = express();
var hbs = require("hbs")

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("home")
})

app.get("/about", (req,res) => {
    res.render("about")
})

app.get("/works", (req,res) => {
    res.render("works")
})

app.listen(3200, () => {
    console.log("Server activated!")
})



// A Home page, that welcomes the visitor and links to the other pages on the website.
// An About page, that shares some basic information about the person.
// A Works page, where you showcase some of the work of the person you chose.
// Bonus: A Photo Gallery page, displaying some pictures of the person/their work.


// Create a views/ directory that will hold your .html files.
// Create a public/ directory that will hold other static files, such as your CSS stylesheets, scripts and images.
// Build your Express app in app.js.
// Polish your HTML, stylesheets and scripts.
