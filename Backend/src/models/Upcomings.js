const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const upcomingSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    imageUrl: {
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
    }

});


module.exports = mongoose.model('upcomings', upcomingSchema);