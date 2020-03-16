
const express = require('express');
const app = express();
const students= require("./new.json");
var hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname+'/public'));




app.get("/home", (req,res)=>{
    res.render("home")
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("/photogallery", (req,res)=>{
    res.render("photogallery")
})



app.listen(3001, () =>{
    console.log("listening on port",3000)
});