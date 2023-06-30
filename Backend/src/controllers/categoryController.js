const Categories = require('../models/Categories');
var ObjectID = require('mongoose').Types.ObjectId

const { body, validationResult } = require('express-validator/check')

//validation method
exports.validate = (method) => {
  switch (method) {
    case 'upload_category': {
     return [ 
            body('categoryName').exists().isLength({ min: 1 }),
       ]   
    }
    case 'edit_category': {
        return [ 
            body('categoryName').exists().isLength({ min: 1 }),
          ]   
       }
  }
}

exports.get_categories = function (req, res) {
    Categories.find((err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_category = function (req, res) {

    let newCategory = new Categories({
        categoryName: req.body.categoryName,
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    newCategory.save();
    
    res.json({
        data: newCategory
    });
}

exports.edit_category = function (req, res) {

    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let updatedCategory = {
        categoryName: req.body.categoryName,
    }

    Categories.findByIdAndUpdate(req.params.id, {$set: updatedCategory}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc)
        }else{
            console.log('Error while updating category')
        }
    })
}

exports.delete_category = function (req, res) {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Categories.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error while deleting record')
        }
    })
}

exports.get_category = function (req, res) {
    let id = req.params.id;

    try {
        Categories.findById({ _id: id }).exec(function (err, category) {
            if (category) {
                res.send(category);
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
