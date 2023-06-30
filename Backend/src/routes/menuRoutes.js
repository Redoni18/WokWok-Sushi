const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const menuController = require('../controllers/menuController');


/**
 * @swagger
 * tags:
 *   name: Menu API
 *   description: Endpoints for managing menu items
 */

/**
 * @swagger
 * /api/menu:
 *   get:
 *     tags: [Menu API]
 *     summary: Fetch all menu items
 *     description: Used to fetch all menu items
 *     responses:
 *       '200':
 *         description: Success. Returns the list of menu items.
 */
router.get('/api/menu', menuController.get_items);

router.post('/api/uploadItem', menuController.upload_product)

/**
 * @swagger
 * /api/menuItem/{id}:
 *   get:
 *     tags: [Menu API]
 *     summary: Fetch a specific menu item by ID
 *     description: Used to fetch a specific menu item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Menu Item ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Menu Item fetched successfully
 *       '404':
 *         description: Message not found
 *       default:
 *         description: Error response
 */

router.get('/api/menuItem/:id', menuController.get_item)

router.put('/api/menuItem/edit/:id', menuController.edit_item)

/**
 * @swagger
 * /api/menuItem/delete/{id}:
 *   delete:
 *     tags: [Menu API]
 *     description: Deletes a specific menu item.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Menu Item deleted successfully
 *       404:
 *         description: Menu item not found
 *       default:
 *         description: Error response
 */

router.delete('/api/menuItem/delete/:id', menuController.delete_item)

module.exports = router;