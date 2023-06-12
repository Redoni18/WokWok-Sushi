const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    productId: {
        type: String,
        required: true
    },
    review: {
        type: String,
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
});

module.exports = mongoose.model('reviews', reviewSchema);