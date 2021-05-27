const express = require("express")
const app = express()

app.use(express.static('public'))
//configura hbs para las vistas
app.set("views",__dirname +"/views");
app.set("view engine","hbs");
// App routes//
app.get('/home', (req,res) => {
    res.render('home',{
        homePage: true
    })
})
app.get('/about', (req,res) => {
    res.render('about',{
        aboutPage: true
    })
})
app.get('/works', (req,res) => {
    res.render('works', {
        worksPage: true
    })
})
app.get('/gallery', (req,res) => {
    res.render('gallery', {
        galleryPage: true
    })
})




app.listen(3000,() => {
   console.log("Ready on port 3000") 
})