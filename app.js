const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/about", (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + "/views/about/about.html");
})

app.get("/photo-gal", (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + "/views/photo-gal/photogal.html");
})

app.get("/works", (req, res, next) => {
console.log(req);
    res.sendFile(__dirname + "/views/works/works.html");
})

app.listen(3000, () => console.log('App running'));