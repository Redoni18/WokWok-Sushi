const PayMethods = require('../models/PayMethods');
var ObjectID = require('mongoose').Types.ObjectId

const { body, validationResult } = require('express-validator/check')

//validation method
exports.validate = (method) => {
  switch (method) {
    case 'insert_paymethods': {
     return [ 
            body('name').exists().isLength({ min: 2 }),
       ]   
    }
    case 'edit_paymethods': {
        return [ 
            body('name').exists().isLength({ min: 2 }),
          ]   
       }
  }
}

exports.get_paymethods = function(req, res) {
    PayMethods.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.insert_paymethods = function(req, res) {

    console.log(req.body)

    let newPayMethods = new PayMethods({
        name: req.body.name,
        insertedBy: req.body.insertedBy,
        insertDate: req.body.insertDate
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    newPayMethods.save();

    res.json({
        data: newPayMethods
    });
}

exports.edit_paymethods = function(req, res) {

    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedPayMethods = {
        name: req.body.name,
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    PayMethods.findByIdAndUpdate(req.body._id, { $set: updatedPayMethods }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error while updating PayMethod')
        }
    })
}

exports.delete_paymethods = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    PayMethods.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}

exports.get_paymethod = function(req, res) {
    let id = req.params.id;

    try {
        PayMethods.findById({ _id: id }).exec(function(err, paymethod) {
            if (paymethod) {
                res.send(paymethod);
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