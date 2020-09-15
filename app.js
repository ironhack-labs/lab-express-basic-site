const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')


// --------------- TEMPLATING ENGINE SETUP ----------------

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
hbs.registerPartials(path.join(__dirname, 'views/partials/'))

// --------------- MIDDLEWARES ----------------

app.get('/', (req, res) => {
	res.render('home')
})
 
app.get('/about', (req, res) => {
	res.render('about')
})

app.get('/works', (req, res) => {
	res.render('works')
})

app.listen(8080, () => console.log('working'))