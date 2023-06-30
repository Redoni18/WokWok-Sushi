const express = require('express');
const router = express.Router();

const categoryRouter = require("./categoryRoutes");

router.use(categoryRouter);

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