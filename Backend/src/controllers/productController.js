const Products = require('../models/Products');
var ObjectID = require('mongoose').Types.ObjectId
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const { body, validationResult } = require('express-validator/check')

//validation method
exports.validate = (method) => {
  switch (method) {
    case 'upload_product': {
     return [ 
            body('productName').exists().isLength({ min: 1 }),
            body('productDescription').exists().isLength({min: 2, max: 300}),
            body('stock').exists().isInt(),
            body('image').optional(),
            body('imageUrl').exists().isURL(),
            body('productPrice').exists().isInt(),
            body('productCategory').exists(),
            body('productBrand').exists(),
       ]   
    }
    case 'edit_product': {
        return [ 
            body('productName').exists().isLength({ min: 1 }),
            body('productDescription').exists().isLength({min: 2, max: 300}),
            body('stock').exists().isInt(),
            body('image').optional(),
            body('imageUrl').exists().isURL(),
            body('productPrice').exists().isInt(),
            body('productCategory').exists(),
            body('productBrand').exists(),
          ]   
       }
  }
}

exports.get_products = function(req, res) {
    Products.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_product = async function(req, res) {

    const stripeProduct = await stripe.products.create({
        name: req.body.productName,
        description: req.body.productDescription,
    });

    const stripeProductPrices = await stripe.prices.create({
        unit_amount: req.body.productPrice * 100, // Stripe requires the price in cents
        currency: "eur",
        product: stripeProduct.id,
    });

    let newProduct = new Products({
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        stock: req.body.stock,
        image: req.body.image,
        imageUrl: req.body.imageUrl,
        productPrice: req.body.productPrice,
        insertedBy: req.body.insertedBy,
        insertDate: req.body.insertDate,
        productCategory: req.body.productCategory,
        productBrand: req.body.productBrand,
        stripePriceId: stripeProductPrices.id
    });

    console.log(stripeProductPrices)

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    newProduct.save();

    res.json({
        data: newProduct
    });
}

exports.edit_product = function(req, res) {

    const errors = validationResult(req)

    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let updatedProduct = {
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        stock: req.body.stock,
        image: req.body.image,
        imageUrl: req.body.imageUrl,
        productPrice: req.body.productPrice,
        productCategory: req.body.productCategory,
        productBrand: req.body.productBrand
    }

    Products.findByIdAndUpdate(req.body._id, { $set: updatedProduct }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error while updating product')
        }
    })
}

exports.delete_product = function(req, res) {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Products.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error while deleting record')
        }
    })
}

exports.get_product = function(req, res) {
    let id = req.params.id;

    try {
        Products.findById({ _id: id }).exec(function(err, product) {
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
        const products = await Products.find({ productName: { $regex: regex } });
        res.send(products)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.filterProductsByBrand =  async (req, res, next) => {
    try {
        const selectedBrandIds = req.query.brands.split(',');
        const category = req.params.category
        const products = await Products.find({ 'productCategory._id': category, 'productBrand._id': { $in: selectedBrandIds } }).populate('productBrand');
        
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found with selected brands' });
        }
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.stripeWebhook = (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.END_POINT_SECRET);
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        // Update your database or fulfill the order here
        console.log('session', session);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
    res.status(200).json({ received: true });
};

exports.stripeCheckoutSession = async (req, res, next) => {
    let id = req.params.id;
    const product = await Products.findById(id);
    const price = product.productPrice;

    try {
        // Create a Checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [{
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: product.productName,
                        description: product.productDescription,
                        images: [product.imageUrl],
                    },
                    unit_amount: price * 100,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:8080/#/success',
            cancel_url: `http://localhost:8080/#/products/details/${product._id}`,
        });

        res.json({ sessionId: session.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// exports.getLastPayment = async (req, res) => {
//     try {
//       // Get the latest payment using the Stripe API
//       const paymentList = await stripe.paymentIntents.list({limit: 1});
  
//       // Check if there is a payment in the list
//       if (paymentList.data.length === 0) {
//         return res.status(404).json({message: 'No payment found.'});
//       }
  
//       // Return the payment object
//       return res.status(200).json(paymentList.data[0]);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({message: 'Internal server error.'});
//     }
// };


exports.getProductsByCategoriesCookie = async (req, res) => {
    // Get categories from cookie
    const categoriesCookie = req.query.categories;
    const categories = categoriesCookie ? categoriesCookie.split(',') : [];
  
    try {
        // Fetch products by categories
        const products = await Products.find({ 'productCategory._id': { $in: categories }});
        
        // Send products as response
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};