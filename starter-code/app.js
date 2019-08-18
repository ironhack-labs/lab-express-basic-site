const express = require('express');
const app = express();
const hbs = require('handlebars')

//making available public
app.use(express.static('public'))

app.set('views', __dirname + '/views');//creates an absolute path pointing to a folder called "views"
app.set('view engine', 'hbs'); //telling ExpressJS that HBS will be in charge of render HTML


//Routes
app.get('/', (req,res,next)=>{
    res.render('index');

})

app.get('/about', (req,res,next)=>{
    res.render('about');

})

app.get('/gallery', (req,res,next)=>{
    res.render('gallery');

})
app.get('*', (req,res,next )=>{
    res.send('<h1>Page Not Found</h1')
})


//Creating a server
const port = process.env.port || 3000;
app.listen(port, (req,res,next)=>{
    console.log("Server running!......")

})