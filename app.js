const express = require("express");
const errorhandler = require("errorhandler");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());
app.use(morgan('dev'));


app.get("/home", (req, res, next) => {
    res.sendFile(__dirname + '/views/home-page.html');
});

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + '/views/about-page.html');
});


app.get("/work", (req, res, next) => {
    res.sendFile(__dirname + '/views/work-page.html');
});

app.get("/gallery", (req, res, next) => {
    res.sendFile(__dirname + '/views/gallery-page.html');
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is connected to Port: ${PORT}`);
    console.log(__dirname);
});