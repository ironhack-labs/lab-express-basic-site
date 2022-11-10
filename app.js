const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// DDBB
require('./db/db-conection')

//Models
const products = require('./models/product.model')

app.get('/', (req, res) => {
    res.render('index')
})


app.get('/tienda', (req, res) => {
    products
        .find()
        .then(allProductsFromDB => {
            res.render('tienda', { products: allProductsFromDB })
        })
        .catch(err => console.log(err))
})

app.listen(5005, () => console.log('APP LISTENING'))