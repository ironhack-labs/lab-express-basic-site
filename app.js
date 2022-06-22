const express = require('express')

const app = express()

const hbs = require('hbs');

const path = require('path');
const Product = require('./models/Product.model');

require('./db')

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render('home')
}),

    app.get("/tienda", (req, res) => {
        Product
            .find()
            .select({ images: 1, title: 1, description: 1, price: 1 })
            .sort({price: 1})
            .then(prod => {
                res.render('tienda', { prod })
            })
            .catch(err => console.log(err))
    })



app.listen(3000, () => console.log('🏃‍ on port 3000'));

