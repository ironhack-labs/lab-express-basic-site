const express = require('express')

const hbs = require('hbs')

const path = require('path')
const app = express()



app.set('view engine','hbs')
app.set('views',path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req, res)=>{
    //res.send('funciona')
    res.render('home')
})

app.get('/about',(req, res)=>{
    //res.send('funciona')
    res.render('about')
})

app.get('/works',(req, res)=>{
    //res.send('funciona')
    res.render('works')
})

app.get('/gallery',(req, res)=>{
    //res.send('funciona')
    res.render('gallery')
})

app.listen(5000, ()=> console.log('on port 5000'))