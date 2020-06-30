const express = require("express");
const hbs = require("hbs");
const app = express();


//BASIC CONFIG

app.use(express.static(__dirname + "/public"));

//TEMPLATE CONFIG
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")

//BASIC ROUTING
app.get("/", (req, res) => {
    res.render("home", {
        title : "Home"
    });
})

app.get("/about", (req, res) => {
    res.render("about", {
        title : "about"
    });
})

app.get("/works", (req, res) => {
    res.render("works", {
        title : "works"
    });
})



//LOCAL SERVER
app.listen(3000, (() => {
    console.log('server is running @ http://localhost:3000')
}))