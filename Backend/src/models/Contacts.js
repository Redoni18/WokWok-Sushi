const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const contactSchema = new Schema({
    contactName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    contactDescription: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('contact', contactSchema);