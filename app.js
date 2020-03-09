const express = require('express');
const app = express();
var books = require("./books.json");
var images = require("./gallery.json")

var hbs = require("hbs");

app.use(express.static('public'))

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req,res)=> {
    res.render("home");
});

app.get("/about", (req,res)=> {
    res.render("about");
});

app.get("/work", (req,res)=> {
    res.render("work");
});

app.get("/books", (req,res)=>{
    res.render("books",{book:books});
});

app.get("/gallery", (req,res)=>{
    res.render("gallery",{image:images});
});

app.listen(3000, ()=> {
    console.log("listening on port", 3000);
});



