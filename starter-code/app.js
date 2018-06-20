const express = require('express');

const app = express();

app.use(express.static("public"));

app.get("/bunny", (req, res, next) => {
    res.sendFile(__dirname + "/views/bunny.html");
});

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.listen(3000, () => {
    console.log("up");
})