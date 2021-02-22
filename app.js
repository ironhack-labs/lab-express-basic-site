// require
const express = require("express") ;
const hbs = require("hbs") ;
const app = express() ;

// settings
app.use(express.static(__dirname + "/public")) ;
app.set("views", __dirname + "/views") ;
app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/bloodborne", (req, res) => {
    res.render("bloodborne")
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

app.get("/Lady-Maria", (req, res) => {
    data = {
        hpNG: 14081, 
        hpNGP: 20514,
        echoNG: 39000,
        echoNGP: 123669,
        physDef: 0,
        vsTrust: 0,
        vsBlunt: 0,
        fire: 0,
        bolt: 0,
        arcane: 0,
        slowPoison: 0,
        rapidPoison: 0,
        blood: 0,
        bossImage: "/images/lady-maria.png"} ;
    res.render("bloodborne-boss", data)
})

app.get("/Kos", (req, res) => {
    data = {
        hpNG: 14081, 
        hpNGP: 20514,
        echoNG: 39000,
        echoNGP: 123669,
        physDef: 0,
        vsTrust: 0,
        vsBlunt: 0,
        fire: 0,
        bolt: 0,
        arcane: 0,
        slowPoison: 0,
        rapidPoison: 0,
        blood: 0,
        bossImage: "/images/kos.jpg"} ;    
        res.render("bloodborne-boss", data)
})



const port = 3000;

app.listen(port, () => {
    console.log("Ready @ http://localhost:" + port)
})
