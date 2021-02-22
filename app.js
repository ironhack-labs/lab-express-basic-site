// console.log("hello")

const express = require("express");
const hbs = require("hbs");

const app = express();

// console.log(express) ==> I am calling express, it works in the console

//app configuration:

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//let's setup our routes

//HOMEPAGE
app.get("/home", (request, response) => {
    response.render("home")
});

//ABOUT PAGE
app.get("/about", (request, response) => {
    const info = {
        year: 1989
    }
    response.render("about", info)
})

// THE WORKS PAGE

app.get("/works", (request, response) => {
    response.render("works")
})

//START THE SERVER, THE LISTEN

app.listen(3001, () => {
    console.log("ready @ http://localhost:3001")
})
