const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const brandsSchema = new Schema({
    brandName: {
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


module.exports = mongoose.model('brands', brandsSchema);