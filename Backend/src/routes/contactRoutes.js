const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const contactController = require('../controllers/contactController.js');

/**
 * @swagger
 * tags:
 *   name: Contact API
 *   description: Endpoints for managing new messages
 */

/**
 * @swagger
 * /api/contact:
 *   get:
 *     tags: [Contact API]
 *     summary: Fetch all messages sent to admin
 *     description: Used to fetch all messages
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 */

router.get('/api/contact', contactController.get_contacts);

/**
 * @swagger
 * /api/contact/{id}:
 *   get:
 *     tags: [Contact API]
 *     summary: Fetch a specific message by ID
 *     description: Used to fetch a specific message by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Message ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Message fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       '404':
 *         description: Message not found
 *       default:
 *         description: Error response
 */

router.get('/api/contact/:id', contactController.get_contact);



/**
 * @swagger
 * /api/uploadContact:
 *   post:
 *     tags: [Contact API]
 *     description: Send new message.
 *     parameters:
 *       - in: body
 *         name: contact
 *         description: Contact must contain contact email and message
 *         schema:
 *           type: object
 *           properties:
 *             contactEmail:
 *               type: string
 *             contactDescription:
 *               type: string
 *           required:
 *             - contactEmail
 *             - contactDescription
 *     responses:
 *       200:
 *         description: Returns the uploaded category object.
 *       400:
 *         description: Returns an array of validation errors if the request body is invalid.
 *       default:
 *         description: Error response
 */
router.post('/api/uploadContact', contactController.insert_contacts);



/**
 * @swagger
 * /api/contact/delete/{id}:
 *   delete:
 *     tags: [Contact API]
 *     description: Deletes a specific contact.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Message deleted successfully
 *       404:
 *         description: Message not found
 *       default:
 *         description: Error response
 */
router.delete('/api/contact/delete/:id', contactController.delete_contacts);


module.exports = router;