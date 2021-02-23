// require
const express = require("express") ;
const hbs = require("hbs") ;
const app = express() ;

const db = require("./module/db.js") ;

// settings
app.use(express.static(__dirname + "/public")) ;
app.set("views", __dirname + "/views") ;
app.set("view engine", "hbs") ;
hbs.registerPartials(__dirname + "/views/partials");

// objects
const bloodborneBosses = db.bloodborneBosses ;
const bloodborneBossesArray = Object.values(bloodborneBosses).sort((boss1, boss2) => boss1.name > boss2.name ? 1 : -1) ;

// routings

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/bloodborne", (req, res) => {
    const data = {bloodborneBossesArray: bloodborneBossesArray} ; 
    res.render("bloodborne", data)
})

app.get("/dark-souls-1", (req, res) => {
    res.render("dark-souls-1")
})

app.get("/Artorias", (req, res) => {
    data = {hp: 5000} ;
    res.render("ds1-boss", data)
})

app.get("/Guyn", (req, res) => {
    data = {hp: 10000} ;
    res.render("ds1-boss", data)
})

// <a href="/bloodborn/lady-maria">go</a>
// /:game/:boss
app.get("/lady-maria", (req, res) => {
    data = {
        stat: bloodborneBosses.ladyMaria,
        bloodborneBossesArray: bloodborneBossesArray,
    } ;
    res.render("bloodborne-boss", data) ;
})

app.get("/Kos", (req, res) => {
    data = {
        stat: bloodborneBosses.kos,
        bloodborneBossesArray: bloodborneBossesArray,
    } ;
    res.render("bloodborne-boss", data) ;
})

const port = 3000;

app.listen(port, () => {
    console.log("Ready @ http://localhost:" + port)
})
