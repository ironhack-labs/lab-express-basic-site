const express = require("express");
const hbs = require("hbs");
const app = express();
require("dotenv").config();


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

app.get("/scenes", (req, res) => {
    res.render("scenes", {
        title : "scenes"
    });
})

app.get("/culture", (req,res) => {
    res.render("culture", { title : "culture"});
})



//LOCAL SERVER
app.listen(process.env.PORT, (() => {
    console.log(`server is running @ http://localhost:${process.env.PORT}`)
}))