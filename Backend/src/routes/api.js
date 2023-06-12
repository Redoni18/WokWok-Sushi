const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const categoryController = require('../controllers/categoryController');
// const pendingOrderController = require('../controllers/pendingOrderController')

//products
router.get('/api/category', categoryController.get_categories);
router.get('/api/category/:id', categoryController.get_category);
router.post('/api/uploadCategory', categoryController.validate('upload_category'), categoryController.upload_category);
router.put('/api/editCategory/:id', categoryController.validate('edit_category'), categoryController.edit_category);
router.delete('/api/category/delete/:id', categoryController.delete_category);

//Stripe checkout session
// router.post('/api/create-checkout-session/:id', productController.stripeCheckoutSession);
// //Stripe webhook
// router.post('/stripe/webhook', productController.stripeWebhook);
//Stripe get last payment
// router.get('/api/stripe/last-payment', productController.getLastPayment)

// //pending stripe orders
// router.get('/api/pending-orders', pendingOrderController.get_pending_orders);
// router.post('/api/uploadPendingOrder', pendingOrderController.validate('upload_pending_order'), pendingOrderController.upload_pending_order);
// router.delete('/api/pending/delete/:id', pendingOrderController.delete_pending_order);


module.exports = router;