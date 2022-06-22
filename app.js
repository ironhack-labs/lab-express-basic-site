const express = require('express')
const hbs = require('hbs')
const path = require('path')
const Product = require('./models/Product.model')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

require('./db')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/shop', (req, res) => {

    Product

        .find()
        .sort({ price: 1 })
        .select({ title: 1, price: 1, description: 1, images: 1 })
        .then(products => {
            console.log(products)
            res.render('shop', { products })
        })

        .catch(err => console.log(err))

})

app.listen(5005, console.log('Servidor levantado en puerto 5005'))