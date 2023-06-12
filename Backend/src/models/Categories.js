const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('categories', categorySchema);