const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"))
hbs.registerPartials(__dirname + "/views/partials")

app.get("/", (req,res,next)=>{
    res.render("home.hbs", {
        css: ["home.css"]
    })
})

app.get("/about", (req,res,next)=>{
    res.render("about.hbs")
})

app.get("/works", (req,res,next)=>{
    res.render("works.hbs")
})

app.get("/photogallery", (req,res,next) => {
    res.render("photogallery.hbs")
})


app.listen(8000)