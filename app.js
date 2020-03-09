const express = require("express");
const app = express();
var hbs = require('hbs');
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static('public'))

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get("/home", (req,res)=> {
    res.render("home");
})

app.get("/about", (req,res)=> {
    res.render("about");
})

app.get("/work", (req,res)=> {
  res.render("work");
})

app.listen(3000, ()=> {
    console.log("listening on port", 3000)
})


