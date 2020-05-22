const express = require ("express")
const hbs = require("hbs")
const app = express()
const path = require ("path");

//Handlebars - templating / VIEWS
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname+"/views/partials"))

//rutas
app.get("/",(req,res) => {
        
    res.render("home")
})


app.get("/about",(req,res) => {
        
    res.render("about")
})


app.get("/works",(req,res) => {
        
    res.render("works")
})

//listenig server
app.listen(3000,() => console.log("Running"))