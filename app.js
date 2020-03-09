const express = require('express')
const app = express()
var hbs = require('hbs');


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', function (req, res) {
    res.render('home')
})

app.get('/about', function (req, res) {
    res.render('about')
})

app.get('/photoGallery', function (req, res) {
    res.render('photoGallery')
})

app.get('/works', function (req, res) {
    res.render('works')
})

app.get('/food', function (req, res) {
    res.render('food')
})




app.use(express.static("public"))








app.listen(3000, () => {
    console.log("listening on port", 3000)
})

