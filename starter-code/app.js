var express = require("express")
var app = express()
var path = require("path")

app.use(express.static('public'))

var hbs = require("hbs");
hbs.registerPartials(__dirname + '/views/partials')

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs');


app.get("/", function(req, res) {
  res.render('index.hbs')
})

app.get("/about", function(req, res) {
  res.render('about.hbs')
})

//Keeping the below as HTML for my own understanding
app.get("/gallery", function(req, res) {
  res.sendFile(path.join(__dirname + '/views/gallery.html'))
})

app.listen(5000, function() {
  console.log("listening")
})