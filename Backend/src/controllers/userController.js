const User = require('../models/Users');
var ObjectID = require('mongoose').Types.ObjectId


exports.insert_user = function (req, res) {

    console.log(req.body)

    let newUser = new User({
        uid: req.body.uid,
        fullName: req.body.fullname,
        email: req.body.email,
        isAdmin: req.body.email.includes('@eCommerce') ? true : false,
        isDelivery: req.body.email.includes('@delivery') ? true : false,
    });

    newUser.save();
    
    res.json({
        data: newUser
    });
}


exports.get_user = function (req, res) {
    let id = req.params.uid;

    try {
        User.findOne({ uid: id }).exec(function (err, user) {
            if (user) {
                res.send(user);
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
