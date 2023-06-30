const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const contactSchema = new Schema({
    contactEmail: {
        type: String,
        required: true
    },
    contactDescription: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('contact', contactSchema);