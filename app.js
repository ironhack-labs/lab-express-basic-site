
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"))

app.get("/", (req,res ) => {
    res.sendFile(__dirname +  "/index.html")
})

app.get("/about", (req,res) => {
    res.sendFile(__dirname + "/about.html")
})

app.get("/works", (req,res) => {
    res.sendFile(__dirname + "/works.html")
})

app.get("/gallery", (req,res) => {
    res.sendFile(__dirname + "/gallery.html")
})

app.listen(port, () => {
    console.log(`Server is listening @ port ${port}`);
})