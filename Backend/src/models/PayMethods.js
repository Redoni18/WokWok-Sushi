const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const paymethodSchema = new Schema({
    name:{
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

module.exports = mongoose.model('paymethod', paymethodSchema);