require("dotenv").config(); // .env exposed
require("./config/mongodb"); // databse connected

const express = require("express");
const hbs = require("hbs");
const app = express();

//Base configuration
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true })); // synchronous

//Template configuration
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Routing
app.get("/", (req, res) => {
    res.render("homepage", { pageTitle: "Homepage" });
})

const abilityModel = require("./models/abilities");

app.get("/about", (req, res) => {
    abilityModel.find()
        .then((dbRes) => res.render("about.hbs", { pageTitle: "Main character", abilities: dbRes, weaknesses:["Bullets & Mortality", "Vengeance", "Overconfidence", "Anger"] }))
        .catch((dbErr) => res.send(dbErr))
});

app.get("/add-new-ability", (req, res) => {
    res.render("about.hbs");
});

app.post("/add-new-ability", (req, res) => {
    abilityModel.create(req.body)
        .then((dbRes) => res.redirect("/about"))
        .catch((dbErr) => res.send(dbErr));
});

app.get("/delete-ability/:id", (req, res) => {
    abilityModel.findByIdAndRemove(req.params.id)
        .then((dbRes) => res.redirect("/about"))
        .catch((dbError) => res.send(dbError));
});

app.get("/work", (req, res) => {
    res.render("work", { pageTitle: "Chapters", images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"] });
})

//DATATBASE


app.listen(process.env.PORT, () => console.log(`started at http://localhost:${process.env.PORT}`));

