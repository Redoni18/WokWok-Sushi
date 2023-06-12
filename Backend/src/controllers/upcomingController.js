const Upcomings = require('../models/Upcomings');
var ObjectID = require('mongoose').Types.ObjectId

const { body, validationResult } = require('express-validator/check')

//validation method
exports.validate = (method) => {
  switch (method) {
    case 'upload_upcoming': {
     return [ 
            body('productName').exists().isLength({ min: 1 }),
            body('imageUrl').exists().isURL(),
            body('productBrand').exists(),
       ]   
    }
    case 'edit_upcoming': {
        return [ 
            body('productName').exists().isLength({ min: 1 }),
            body('imageUrl').exists().isURL(),
            body('productBrand').exists(),
          ]   
       }
  }
}


exports.get_upcomings = function(req, res) {
    Upcomings.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_upcoming = function(req, res) {

    console.log(req.body)

    let newUpcoming = new Upcomings({
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        imageUrl: req.body.imageUrl,
        insertedBy: req.body.insertedBy,
        insertDate: req.body.insertDate
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    newUpcoming.save();

    res.json({
        data: newUpcoming
    });
}

exports.edit_upcoming = function(req, res) {

    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedUpcoming = {
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        imageUrl: req.body.imageUrl
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Upcomings.findByIdAndUpdate(req.body._id, { $set: updatedUpcoming }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error while updating upcoming')
        }
    })
}

exports.delete_upcoming = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Upcomings.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}

exports.get_upcoming = function(req, res) {
    let id = req.params.id;

    try {
        Upcomings.findById({ _id: id }).exec(function(err, upcoming) {
            if (upcoming) {
                res.send(upcoming);
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