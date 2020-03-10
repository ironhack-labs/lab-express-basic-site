const express = require('express');
var hbs = require('hbs')
const app = express();
const path = require('path');
app.use(express.static("public"));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.render('home');
})
app.get("/about", (req, res) => {
    res.render('about');
})
app.get("/work", (req, res) => {
    res.render('work');
})


app.listen(3000, function() {
    console.log('listening to port');
})