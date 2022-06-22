const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: Array

})

const Product = model('Product', productSchema)
module.exports = Product