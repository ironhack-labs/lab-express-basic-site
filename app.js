const express = require('express')
const app = express()
const hbs = require('hbs')


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render("home")
})

app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('/history', (req,res)=>{
    res.render('history')
})

app.get('/contro', (req,res)=>{
    res.render('contro')
})

app.listen(3000, ()=>{
    console.log('listening on 3k')
})