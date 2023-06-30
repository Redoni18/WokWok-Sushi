const MenuItems = require('../models/Menu');
var ObjectID = require('mongoose').Types.ObjectId
const mongoose = require('mongoose');
const Menu = require('../models/Menu');

exports.get_items = function(req, res) {
    MenuItems.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_product = async function(req, res) {

    let newItem = new MenuItems({
        menuItem: req.body.menuItem,
        imageUrl: req.body.imageUrl,
        itemPrice: req.body.itemPrice,
        itemIngredients: req.body.itemIngredients,
        itemCategory: req.body.itemCategory,
    });


    newItem.save();

    res.json({
        data: newItem
    });
}

exports.edit_item = function(req, res) {

    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedItem = {
        menuItem: req.body.menuItem,
        imageUrl: req.body.imageUrl,
        itemPrice: req.body.itemPrice,
        itemIngredients: req.body.itemIngredients,
        itemCategory: req.body.itemCategory,
    }

    MenuItems.findByIdAndUpdate(req.body._id, { $set: updatedItem }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error while updating product')
        }
    })
}

exports.delete_item = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    MenuItems.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}

exports.get_item = function(req, res) {
    let id = req.params.id;

    try {
        MenuItems.findById({ _id: id }).exec(function(err, product) {
            if (product) {
                res.send(product);
            }
        });
    } catch (error) {
        if ([400, 403, 404].includes(error.code)) {
            return res.status(error.code).send(error.message);
        }

        console.error(error);
        return res.status(500).send(error.message);
    }
};

exports.findProductByName = async (req, res) => {
    const searchTerm = req.query.searchTerm;
    try {
        const regex = new RegExp(searchTerm, 'i');
        const products = await MenuItems.find({ menuItem: { $regex: regex } });
        res.send(products)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.filterItemsByCategory =  async (req, res, next) => {
    try {
        const selectedBrandIds = req.query.brands.split(',');
        const category = req.params.category
        const products = await MenuItems.find({ 'itemCategory._id': category }).populate('itemCategory');
        
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found with selected brands' });
        }
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};