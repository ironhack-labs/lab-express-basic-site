// Require Express
const express = require('express');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

// Express server handling requests and responses
const app =
    express();

// Make everything inside of public/ available
app.use(express.static('public'));

// creates an absolute path pointing to a folder called "views"
app.set('views', __dirname + '/views');
// hbs will be in charge of rendering our html
app.set('view engine', 'hbs');

// our first Routes
app.get('/', (req, res, next) => {
    res.render('index', { title: "Discover Mexico", css: ["home"] });
});

app.get('/about', (req, res, next) => {
    res.render('about', { title: "About me", css: ["about", "home"] });
});

app.get('/gallery', (req, res, next) => {
    res.render('gallery', { title: "Photo gallery", css: ["slick", "slick-theme", "home", "gallery"], script: ["slick"], fonts: ["slick"] });
});

// Kickstart server
app.listen(3000);