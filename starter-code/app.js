const express = require('express')

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.get('/', (req, res, next) => {
    res.render('index')
})

app.get('/home', (req, res, next) => {
    res.render('home', {text: 'Bienvenido a un sitio hecho con express y Handlebars'})
})

app.get('/about', (req, res, next) => {
    res.render('about', {name: 'Fernando Servín'})
})

app.get('/gallery', (req, res, next) => {
    res.render('gallery', {images: [
        'https://s3-us-west-2.amazonaws.com/admin-tool-banners/categories/Art.jpg',
        'https://pbs.twimg.com/profile_images/1171864870955831296/w28SLLqk_400x400.jpg',
        'http://cdn.shopify.com/s/files/1/0989/8218/products/1332_Art15FM_5-6-2016_12-48-19_PM_Small_grande.jpg?v=1462810662',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2w_sJ5BShLqM3NXFKwrv0I_YmAgUAd4LXozzsevzyIzlgReI4lw&s'
    ]})
})

app.listen(3000, ()=>{console.log('Running')})