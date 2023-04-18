//fisrt thing you need is express
const express = require("express");
const app = express()
app.use(express.static("public"));

//made a special cool route for my home page
app.get("/" , (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

//Home Route
app.get("/home" , (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

// About Route 
app.get("/about" , (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

// Works Route
app.get("/works" , (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
});

// Gallery Route
app.get("/gallery" , (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
    console.log('listening on port 3000!')
});