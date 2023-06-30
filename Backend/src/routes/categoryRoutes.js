const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const categoryController = require('../controllers/categoryController');
// const pendingOrderController = require('../controllers/pendingOrderController')

/**
 * @swagger
 * tags:
 *   name: Category API
 *   description: Endpoints for managing categories
 */

/**
 * @swagger
 * /api/category:
 *   get:
 *     tags: [Category API]
 *     summary: Fetch all menu categories
 *     description: Used to fetch all menu categories
 *     responses:
 *       '200':
 *         description: Success. Returns the list of menu categories.
 */

router.get('/api/category', categoryController.get_categories);

/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     tags: [Category API]
 *     description: Uploads a new category.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           required:
 *             - categoryName
 *     responses:
 *       200:
 *         description: Category fetched successfully
 *       404:
 *         description: Category not found
 *       default:
 *         description: Error response
 */

router.get('/api/category/:id', categoryController.get_category);


/**
 * @swagger
 * /api/uploadCategory:
 *   post:
 *     tags: [Category API]
 *     description: Get specific category.
 *     parameters:
 *       - in: body
 *         name: category
 *         description: Category object containing the category name.
 *         schema:
 *           type: object
 *           properties:
 *             categoryName:
 *               type: string
 *           required:
 *             - categoryName
 *     responses:
 *       200:
 *         description: Returns the uploaded category object.
 *       400:
 *         description: Returns an array of validation errors if the request body is invalid.
 *       default:
 *         description: Error response
 */

router.post('/api/uploadCategory', categoryController.validate('upload_category'), categoryController.upload_category);

/**
 * @swagger
 * /api/editCategory/{id}:
 *   put:
 *     tags: [Category API]
 *     description: Edit a specific category.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the category to be edited.
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: category
 *         description: Category object containing the category name.
 *         schema:
 *           type: object
 *           properties:
 *             categoryName:
 *               type: string
 *           required:
 *             - categoryName
 *     responses:
 *       200:
 *         description: Returns the updated category object.
 *       400:
 *         description: Returns an array of validation errors if the request body is invalid.
 *       default:
 *         description: Error response
 */


router.put('/api/editCategory/:id', categoryController.validate('edit_category'), categoryController.edit_category);

/**
 * @swagger
 * /api/category/delete/{id}:
 *   delete:
 *     tags: [Category API]
 *     description: Deletes a specific category.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           required:
 *             - categoryName
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 *       default:
 *         description: Error response
 */

router.delete('/api/category/delete/:id', categoryController.delete_category);


module.exports = router;