const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
    console.log(req.url);
    res.sendFile(__dirname + "/views/homepage.html")
});

app.get("/about", (req, res, next) => {
    console.log(req.url);
    res.sendFile(__dirname + "/views/about.html")
});

app.get("/photogallery", (req, res, next) => {
    console.log(req.url);
    res.sendFile(__dirname + "/views/photogallery.html")
})

app.listen(6000, () => {
    console.log("app listening port 6000");
})