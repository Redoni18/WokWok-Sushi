const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    insertedBy: {
        type: String,
        required: true
    },
    insertDate: {
        type: String,
        required: true
    },
    productCategory: { 
        type: mongoose.Schema.Types.Mixed, 
        ref: 'categories' 
    },
    productBrand: {
        type: mongoose.Schema.Types.Mixed, 
        ref: 'brands'
    },
    stripePriceId: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('products', productSchema);