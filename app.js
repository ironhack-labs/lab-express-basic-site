const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded( {extended : true}));
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
})

app.listen(port, () => {
    console.log(`Example app listening to this ${port}`);
    }) 


module.exports  = app;