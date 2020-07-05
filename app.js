const express = require("express");
const hbs = require("hbs");
const app = express();

//Base configuration
app.use(express.static(__dirname + "/public"));

//Template conifguration
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Routing
app.get("/", (req,res) => {
    res.render("homepage", {pageTitle: "Homepage"});
})

app.get("/about", (req,res) => {
    res.render("about", {pageTitle: "Main character", abilities: ["Peak Human Strength", "Peak Human Durability", "Peak Human Speed", "Peak Human Agility", "Peak Human Stamina", "High Pain Tolerance", "Master Assassin", "Keen Intelligence"], weaknesses :["Vengeance", "Overconfidence","Anger", "Bullets & Mortality"]});
})

app.get("/work", (req,res) => {
    res.render("work", {pageTitle: "Chapters", images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"] });
}) //ADD ALL IMAGES IN CHAPTERS PAGE

app.listen(3000, () => console.log("started at http://localhost:3000"));

