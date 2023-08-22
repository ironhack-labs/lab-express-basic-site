const express = require("express");
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));


// Home Page
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html');
    });


// Contact Page
app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
})

// 
app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + '/views/works.html');
})

//

app.get("/gallery", (req, res, next) => {
    res.sendFile(__dirname + '/views/gallery.html');
})



app.listen(3000, () => console.log('My first app listening on port 3000! '));