const Brands = require('../models/Brands.js');
var ObjectID = require('mongoose').Types.ObjectId

const { body, validationResult } = require('express-validator/check')

//validation method
exports.validate = (method) => {
  switch (method) {
    case 'upload_brand': {
     return [ 
            body('brandName').exists().isLength({ min: 1 }),
       ]   
    }
    case 'edit_brand': {
        return [ 
            body('brandName').exists().isLength({ min: 1 }),
          ]   
       }
  }
}

exports.get_brands = function (req, res) {
    Brands.find((err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_brand = function (req, res) {

    console.log(req.body)

    let newBrand = new Brands({
        brandName: req.body.brandName,
        insertedBy: req.body.insertedBy,
        insertDate: req.body.insertDate
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    newBrand.save();
    
    res.json({
        data: newBrand
    });
}

exports.edit_brand = function (req, res) {

    if(!ObjectID.isValid(req.body._id)){
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedBrand = {
        brandName: req.body.brandName
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Brands.findByIdAndUpdate(req.body._id, {$set: updatedBrand}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc)
        }else{
            console.log('Error while updating Brand')
        }
    })
}

exports.delete_brand = function (req, res) {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Brands.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error while deleting record')
        }
    })
}

exports.get_brand = function (req, res) {
    let id = req.params.id;

    try {
        Brands.findById({ _id: id }).exec(function (err, brand) {
            if (brand) {
                res.send(brand);
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
