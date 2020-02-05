require("dotenv").config();
const hbs = require("hbs");
const express = require("express");
const server = express();
const path = require('path');

const PORT = 5555

//  initial setup
server.use(express.urlencoded({ extended: false })); //true for complx nested objects
// things that the browser can download - without permission - to render pages
server.use(express.static("./public"));


//views what the user sees
server.set("views", "./views");
server.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

const cities = [
    {
        name: "New York",
        region: "NE",
        population: 8623000,
        state: "NY",
        capital: false,
        photo: "/images/new-york.jpg",
        nightlife: 5,
        historicalAttractions: 5,
        friendliness: 3
    },
    {
        name: "Chicago",
        region: "MW",
        population: 2716000,
        state: "IL",
        capital: false,
        photo: "/images/chicago.jpg",
        nightlife: 4,
        historicalAttractions: 4,
        friendliness: 4
    },
    {
        name: "Miami ",
        region: "SE",
        population: 2752000,
        state: "FL",
        capital: false,
        photo: "/images/miami.jpg",
        nightlife: 5,
        historicalAttractions: 3,
        friendliness: 3
    },
    {
        name: "Atlanta",
        region: "SE",
        population: 486290,
        state: "GA",
        capital: false,
        photo: "/images/atlanta.jpg",
        nightlife: 4,
        historicalAttractions: 4,
        friendliness: 5
    },
    {
        name: "Houston",
        region: "SW",
        population: 2313000,
        state: "TX",
        capital: false,
        photo: "/images/houstontx.jpeg",
        nightlife: 4,
        historicalAttractions: 5,
        friendliness: 3
    },
    {
        name: "Austin",
        region: "SW",
        population: 950715,
        state: "TX",
        capital: true,
        photo: "/images/austintx.jpg",
        nightlife: 4,
        historicalAttractions: 3,
        friendliness: 5
    },
    {
        name: "Oakland",
        region: "NW",
        population: 425195,
        state: "CA",
        capital: true,
        photo: "/images/oakland.jpeg",
        nightlife: 4,
        historicalAttractions: 3,
        friendliness: 5
    },
    {
        name: "Los Angeles",
        region: "W",
        population: 4000000,
        state: "CA",
        capital: true,
        photo: "/images/losangeles.jpg",
        nightlife: 4,
        historicalAttractions: 3,
        friendliness: 5
    },
]

//routing
server.get(["/", "/home"], (req, res) => {
    res.render("home")
})
server.get("/about", (req, res) => {
    res.render("about")
})
server.get("/gallery", (req, res) => {
    res.render("gallery", { cities })
})

//kick starting - server listenin
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});