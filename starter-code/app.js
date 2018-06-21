const express = require ("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, response, next) => {
    console.log(req.url);
    response.sendFile(__dirname + '/views/home.html');
})

app.get("/about", (req, response, next) => {
    console.log(req.url);
    response.sendFile(__dirname + '/views/about.html');
});

app.listen(3030, () => {
    console.log("Ready!!!");
})