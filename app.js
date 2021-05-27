const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) =>
    res.render('index')
)

app.get('/about', (req, res, next) => {
    res.render('about')
})

app.get('/works', (req, res, next) => {
    res.render('works')
})

app.get('/gallery', (req, res, next) => {
    res.render('gallery')
})

app.listen(process.env.PORT || 3000)