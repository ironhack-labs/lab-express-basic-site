const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/", function(req, res, next){
    console.log("we have received a request for the HOMEPAGE");
    res.sendFile(__dirname + "/views/home-page.html");
});

// GET /contact
app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/views/about-page.html");
});

app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + "/views/works-page.html");
});





app.listen(4000);