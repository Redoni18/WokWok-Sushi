const Orders = require('../models/Orders');
var ObjectID = require('mongoose').Types.ObjectId
const Products = require('../models/Products')

const { body, validationResult } = require('express-validator/check')

//validation method
exports.validate = (method) => {
  switch (method) {
    case 'upload_order': {
     return [ 
            body('firstName').exists().isLength({ min: 1 }),
            body('lastName').exists().isLength({ min: 1 }),
            body('email').exists().isEmail(),
            body('phoneNumber').exists(),
            body('address1').exists().isLength({ min: 5 }),
            body('address2').exists().isLength({ min: 5 }),
            body('orderPrice').exists().isInt(),
            body('paymentMethod').exists(),
       ]   
    }
    case 'edit_order': {
        return [ 
            body('firstName').exists().isLength({ min: 1 }),
            body('lastName').exists().isLength({ min: 1 }),
            body('email').exists().isEmail(),
            body('phoneNumber').exists(),
            body('address1').exists().isLength({ min: 5 }),
            body('address2').exists().isLength({ min: 5 }),
            body('orderPrice').exists().isInt(),
            body('paymentMethod').exists(),
          ]   
       }
  }
}

exports.get_orders = function(req, res) {
    Orders.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_order = async function(req, res) {

    console.log(req.body)

    let newOrder = new Orders({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address1: req.body.address1,
        address2: req.body.address2,
        productId: req.body.productId,
        productName: req.body.productName,
        orderPrice: req.body.orderPrice,
        paymentMethod: req.body.paymentMethod,
        isCompleted: req.body.isCompleted
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    await newOrder.save();

    const product = await Products.findOneAndUpdate(
        { _id: req.body.productId, stock: { $gt: 0 } },
        { $inc: { stock: -1 } },
        { new: true }
    );

    if (!product) {
        return res.status(404).json({ message: 'Product not found or out of stock' });
    }


    res.json({
        data: newOrder
    });
}

exports.edit_order = function(req, res) {

    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedOrder = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address1: req.body.address1,
        address2: req.body.address2,
        productId: req.body.productId,
        productName: req.body.productName,
        orderPrice: req.body.orderPrice,
        paymentMethod: req.body.paymentMethod,
        isCompleted: req.body.isCompleted
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Orders.findByIdAndUpdate(req.body._id, { $set: updatedOrder }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error while updating Order')
        }
    })
}

exports.delete_order = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Orders.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}

exports.get_order = function(req, res) {
    let id = req.params.id;

    try {
        Orders.findById({ _id: id }).exec(function(err, order) {
            if (order) {
                res.send(order);
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