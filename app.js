// GET express and hbs
const express = require("express");
const hbs = require ("hbs");
const app = express();

// Set up
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Define routes

app.get("/", (request, response) => {
    response.render("home")
});

app.get("/about", (request, response) => {
    response.render("about")
});

app.get("/restaurants", (request, response) => {
    response.render("restaurants");
})

app.get("/gallery", (request, response) => {
    response.render("gallery");
})

app.get("/tokyo", (request, response) => {
    response.render("tokyo")
});

app.get("/kyoto", (request, response) => {
    response.render("kyoto");
});

app.get("/seattle", (request, response) => {
    response.render("seattle");
});

app.get("/florence", (request, response) => {
    response.render("florence");
});

app.get("*", (request, response) => response.send("Page not found"));

app.listen(3000, () => {
    console.log("Server is up: http://localhost:3000");
});
