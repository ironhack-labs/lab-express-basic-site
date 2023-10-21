const express = require("express");
const app = express();
const PORT = 5000;

//Make everything inside of public/available
app.use(express.static(path.join(__dirname + 'public')))

//All the routes here
app.get("/nikis_best", (req, res) => {
    res.sendFile(__dirname + '/views/niki.html')
});

app.get("/nikisFacts", (req, res) => {
    res.sendFile(__dirname + '/views/facts.html')
});

app.get("/nikisPortfolio", (req, res) => {
    res.sendFile(__dirname + '/views/portfolio.html')
});

//First thing is to listen to a port and start the server
app.listen(PORT, () => {
    console.log("Welcome To Niki's best version");
});
