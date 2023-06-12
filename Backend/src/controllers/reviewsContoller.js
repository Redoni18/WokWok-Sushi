const Reviews = require('../models/Reviews');
var ObjectID = require('mongoose').Types.ObjectId

exports.get_reviews = function (req, res) {
    Reviews.find((err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_review = function (req, res) {

    console.log(req.body)

    let newReview = new Reviews({
        productId: req.body.productId,
        review: req.body.review,
        insertedBy: req.body.insertedBy,
        insertDate: req.body.insertDate,
    });

    newReview.save();
    
    res.json({
        data: newReview
    });
}

exports.edit_review = function (req, res) {

    if(!ObjectID.isValid(req.body._id)){
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedReview = {
        productId: req.body.productId,
        review: req.body.review,
    }

    Reviews.findByIdAndUpdate(req.body._id, {$set: updatedReview}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc)
        }else{
            console.log('Error while updating review')
        }
    })
}

exports.delete_review = function (req, res) {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Reviews.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error while deleting record')
        }
    })
}

exports.get_review = function (req, res) {
    let id = req.params.id;

    try {
        Reviews.findById({ _id: id }).exec(function (err, review) {
            if (review) {
                res.send(review);
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

exports.getReviewsByProductId = function(req, res) {
    const pId = req.params.productId;
    // let pId = req.params.productId;
    console.log(pId)
    const product = {productId : pId}
    console.log(product)
    try {
        Reviews.find (product).exec(function (err, reviews) {
            if (reviews) {
                res.send(reviews);
            } ;
        }
        );
        // res.send(reviews)
        // res.json(reviews)
        // console.log(res.json(reviews))
    } catch (error) {
        res.status(500).json({ message: error.message });
    }    
}
