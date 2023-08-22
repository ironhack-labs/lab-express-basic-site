const express = require("express");
const app = express();

app.use(express.static("public"))

app.listen(3000, () => console.log('My first app listening on port 3000!'));

//Home page

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html');
});


//about page

app.get("/about",(req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});

//works page

app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + '/views/works.html');
});
