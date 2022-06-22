const express = require('express')
const hbs = require('hbs')
const { join } = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))
hbs.registerPartials(__dirname + "/views/partials");

require('./db')

const Product = require('./models/product.model')

app.get('/', (req, res) => {
    res.render('index-page')
})

app.get('/shop', (req, res) => {
    Product
        .find()
        .select({ _id: 0, images: 1, title: 1, price: 1, rating: 1 })
        .sort({ price: 1 })
        .then(products => {
            
            console.log(products)
            res.render('shop-page', { products })
        })
        .catch(err => console.log(err))
})


app.listen(5005, console.log('SERVER RUNNING ON PORT 5005'))