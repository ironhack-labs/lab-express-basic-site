const express = require("express");
const app = express();
app.use(express.static("public"));

// Home Page
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/views/homepage.html");
});

// About Page
app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/views/about.html");
});

// Contact Page
app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + "/views/contact.html");
});

app.listen(3000);
