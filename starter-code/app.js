var express = require('express')
var app = express()
var hbs = require('hbs');
 
hbs.registerPartials(__dirname + '/views/partials')

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'))


app.get("/", function(req,res){
    res.render("home")
})
 
app.get('/gallery', function(req,res){
    var data = {images:['/images/austin-neill-160132-unsplash.jpg','/images/austin-neill-362028-unsplash.jpg','/images/casey-horner-512022-unsplash.jpg','/images/jeremy-thomas-63102-unsplash.jpg']}
    res.render('gallery', data)
})

app.get('/about', function(req,res){
    res.render('about')
})

app.listen(3000, function(){
    console.log('ONLINE')
})