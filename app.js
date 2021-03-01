//call the framework
const express = require("express");
const hbs = require("hbs");
const app = express();

// set the path
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//define the routes
app.get(["/"], (req, res) => {
    const photographers = [
        {
            firstName: "Brassai",
            lastName: "",
            photo: "img/brassai_main.jpg",
            url: "/brassai"
        },
        {
            firstName: "Vivian",
            lastName: "Maier",
            photo: "img/vivian_maier_bd.jpg",
            url: "/maier"
        },
        {
            firstName: "Joel",
            lastName: "Meyerowitz",
            photo: "img/joel-meyerowitz.jpg",
            url: "/meyerowitz"
        },
        {
            firstName: "Martin",
            lastName: "Parr",
            photo: "img/martin-parr.jpg",
            url: "/parr"
        }
    ]
    res.render("home", {photographers});
})
app.get("/about", (req, res) => {
    const data = {
        title: "About"
    }
    res.render("about", data);
})

app.get("/maier", (req, res) => {
    const data = {
        title: "Vivian Maier"
    }
    
})
app.get("*", (req, res) => {
    res.send("sorry not found.")
})

//local server
app.listen(8001, () => {
    console.log("ready @ http://localhost:8001");
});