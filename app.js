const express = require('express');

const app = express()

app.use(express.static('public'))

app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {

    res.render('index')

})

app.get('/about-page', (req, res) => {

    res.render('about-page')

})

app.get('/works-page', (req, res) => {

    res.render('works-page')

})

app.get('/photoGallery-page', (req, res) => {

    res.render('photoGallery-page')

})



app.listen(3000, () => console.log("Server LEVANTADO"))
