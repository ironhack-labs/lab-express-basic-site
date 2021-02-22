//call the framework
const express = require("express");
const hbs = require("hbs");
const app = express();

// set the path
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//define the routes
app.get(["/", "/home"], (req, res) => {
    res.render("home");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("*", (req, res) => {
    res.send("sorry not found.")
})

//local server
app.listen(8001, () => {
    console.log("ready @ http://localhost:8001");
});