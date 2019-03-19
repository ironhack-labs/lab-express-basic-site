const express = require("express");
var exphbs  = require('express-handlebars');

var app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('views', __dirname + '/views');
app.set('view engine', '.hbs');
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res, next) => {
  let data = {
    name: "Jelena",
    lastName: "Jukic"
  };
  res.render("home", data);
})

app.get("/about", (req,res, next)=>{
  res.render("about");
})

app.get("/projects", (req,res, next)=>{
  res.render("projects");
})

app.listen(3000, console.log("Server is Started"))