const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const menuSchema = new Schema({
    menuItem: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    itemIngredients: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    itemCategory: { 
        type: mongoose.Schema.Types.Mixed, 
        ref: 'categories' 
    },
});


module.exports = mongoose.model('menu', menuSchema);