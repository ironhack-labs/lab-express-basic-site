const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.listen(5000, () => {
    console.log("App is listening!");
})