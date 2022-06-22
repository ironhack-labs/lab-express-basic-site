const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    description: Number,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: Array
})

const Product = mongoose.model('product', productSchema)

module.exports = Product