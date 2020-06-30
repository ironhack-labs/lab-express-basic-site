const express = require("express");
const hbs = require("hbs");

const app = express();

// give access to public assets
app.use(express.static(__dirname + "/public"));

// needs to be put before the template configuration
hbs.registerPartials(__dirname + "/views/partials"); // where the partials are located

// template configuration
app.set("views", __dirname + "/views"); // where the views are located
app.set("view engine", "hbs"); // which templating engine to be used


// routing
app.get("/", (req, res) => {
    res.render("home", {
        pageTitle: "Homepage",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        pageTitle: "About",
    });
});

app.get("/work", (req, res) => {
    res.render("work", {
        pageTitle: "Work",
    });
});

app.get("/gallery", (req, res) => {
    res.render("gallery", {
        pageTitle: "Gallery",
    });
});

app.get("*", function (request, response) {
    response.send("not found sorry");
});

app.listen(3000, () => {
    console.log("server is running @http://localhost:3000");
});