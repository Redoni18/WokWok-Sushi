const Wishlists = require('../models/Wishlists');
var ObjectID = require('mongoose').Types.ObjectId

exports.get_wishlists = function(req, res) {
    Wishlists.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.insert_wishlists = function(req, res) {

    console.log(req.body)

    let newWishlists = new Wishlists({
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productDescription: req.body.productDescription,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId
    });

    newWishlists.save();

    res.json({
        data: newWishlists
    });
}

exports.edit_wishlists = function(req, res) {

    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedWishlists = {
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productDescription: req.body.productDescription,
        imageUrl: req.body.imageUrl
    }

    Wishlists.findByIdAndUpdate(req.body._id, { $set: updatedWishlists }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error while updating Wishlist')
        }
    })
}

exports.delete_wishlists = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Wishlists.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}

exports.get_wishlist = function(req, res) {
    let id = req.params.id;

    try {
        Wishlists.findById({ _id: id }).exec(function(err, wishlist) {
            if (wishlist) {
                res.send(wishlist);
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