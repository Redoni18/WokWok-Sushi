const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    orderPrice: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
});


module.exports = mongoose.model('orders', orderSchema);