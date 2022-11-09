const express = require('express')
const Product = require('./models/Product.model')

const app = express()

app.use(express.static('public'))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

require('./db/db-connection')

require('./models/Product.model')


app.get('/', (req, res) => {
    res.render('index-page')
})

app.get('/tienda', (req, res) => {

    Product

        .find()

        .then(product => {

            return product.select({ title: 1 }, { thumbnail: 1 }, { description: 1 }, { price: 1 }, { discountPercentage: 1 })
        })

        .then(productSelected => {
            return productSelected.sort({ price: -1 })
        })

        .then(productSorted => {
            res.render('shop', { products: productSorted })
        })

        .catch(err => console.log(err))




})

app.listen(5005, () => console.log('servidor levantado en 5005'))







