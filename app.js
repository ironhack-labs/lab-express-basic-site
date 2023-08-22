const express = require("express");
const app = express();

app.use(express.static('public'));

//home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/homepage.html')
});

//about page
app.get("/aboutpage", (req, res) => {
    res.sendFile(__dirname + '/views/aboutpage.html')
});

//works page
app.get("/workspage", (req, res) => {
    res.sendFile(__dirname + '/views/workspage.html')
});

//app listen
app.listen(3001, () => console.log('I am listening! '));