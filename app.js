
const { response } = require("express");
const express = require("express");
const hbs = require("hbs");


const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (request, response) => {
    response.render("/");
   
});

app.get("home", (request, response) => {
    response.render("home.hbs");
    
});

app.get("/About", (request, response) => {
    response.render("About.hbs");
    
});

app.get("/reviews", (request, response) => {
    response.render("reviews");
});

app.get("*", (req, res) => {
    res.send("ouuuch. Backend crash")
});

// kickstarting the local server

app.listen(3030,() => {
    console.log("ready to connect... connected to @ http://localhost:3030");
});
