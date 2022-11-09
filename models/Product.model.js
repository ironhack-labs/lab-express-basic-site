const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        price: Number,
        discountPercentage: Number,
        rating: Number,
        stock: Number,
        brand: String,
        category: String,
        thumbnail: String,
        images: [String]
    }
)
const Product = mongoose.model('Product', productSchema)

module.exports = Product