const express = require("express");


const app = express();

app.use(express.static("public"));

//Route to homepage
app.get('/', (req, res, next) => {
    //console.log(app.settings);
    res.sendFile(__dirname + "/views/home.html");
});

//Route to about
app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + "/views/about.html");
});

//Route to works
app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + "/views/works.html");
});

app.listen(3000);