const express = require('express') 

const app = express();

app.listen(3000, ()  => {
console.log('app listen');
});

app.use(express.static('public'));

app.get("/", (req, res, next) => {
    console.log("Mike Tyson will eat your kids");
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/about", (req, res, next) => {
    console.log("Mike Tyson about to eat your kids");
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/work", (req, res, next) => {
    console.log("Mike Tyson working");
    res.sendFile(__dirname + '/views/work.html');
});

app.get("/gallery", (req, res, next) => {
    console.log("Mike Tyson pictures");
    res.sendFile(__dirname + '/views/gallery.html');
});

