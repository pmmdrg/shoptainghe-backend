/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *         - stock
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the product
 *         description:
 *           type: string
 *           description: The description of the product
 *         price:
 *           type: number
 *           format: float
 *           description: The price of the product
 *         stock:
 *           type: integer
 *           description: The stock quantity of the product
 *         images:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               public_id:
 *                 type: string
 *                 description: The public ID of the image
 *               url:
 *                 type: string
 *                 format: uri
 *                 description: The URL of the image
 *           description: Array of images associated with the product
 *         category:
 *           type: string
 *           format: uuid
 *           description: The ID of the category that the product belongs to
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the product was created
 */
/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: API endpoints for product management
 * paths:
 *   /product/all:
 *     get:
 *       summary: Get all products
 *       tags: [Products]
 *       parameters:
 *         - in: query
 *           name: keyword
 *           schema:
 *             type: string
 *           description: Keyword for searching products
 *         - in: query
 *           name: category
 *           schema:
 *             type: string
 *           description: Category id for filtering products
 *       responses:
 *         '200':
 *           description: Successfully retrieved all products
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   products:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Product'
 *         '401':
 *           description: Unauthorized, unable to retrieve products
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /product/admin:
 *     get:
 *       summary: Get all products for admin
 *       tags: [Products]
 *       responses:
 *         '200':
 *           description: Successfully retrieved all products for admin
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   products:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Product'
 *         '401':
 *           description: Unauthorized, unable to retrieve products for admin
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /product/find:
 *     get:
 *       summary: Find product by name
 *       tags: [Products]
 *       parameters:
 *         - in: query
 *           name: keyword
 *           schema:
 *             type: string
 *           description: Keyword for searching products
  *       responses:
 *         '200':
 *           description: Successfully retrieved all products
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   products:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Product'
 *         '401':
 *           description: Unauthorized, unable to retrieve products
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /product/single/{id}:
 *     get:
 *       summary: Get details of a single product
 *       tags: [Products]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID of the product to retrieve
 *       responses:
 *         '200':
 *           description: Successfully retrieved details of the product
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Product'
 *         '401':
 *           description: Unauthorized, unable to retrieve product details
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *     put:  # Moved `put` under `get` for the same path
 *       summary: Update product details
 *       tags: [Products]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID of the product to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                 stock:
 *                   type: number
 *                 category:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Product updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, failed to update product
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /product/category:
 *     post:
 *       summary: Add a new category
 *       tags: [Products]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 category:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Category added successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, failed to add category
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /product/category/{id}:
 *     delete:
 *       summary: Delete a category
 *       tags: [Products]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID of the category to delete
 *       responses:
 *         '200':
 *           description: Category deleted successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, failed to delete category
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /product/new:
 *     post:
 *       summary: Create a new product
 *       tags: [Products]
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                 stock:
 *                   type: number
 *                 images:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       public_id:
 *                         type: string
 *                       url:
 *                         type: string
 *                 category:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Product created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, failed to create product
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */

import express from "express";
import {
  addCategory,
  addProductImage,
  createProduct,
  deleteCategory,
  deleteProduct,
  deleteProductImage,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getProductByName,
  getProductDetails,
  updateProduct,
} from "../controllers/product.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.get("/admin", isAuthenticated, isAdmin, getAdminProducts);
router.get("/find", getProductByName)

router
  .route("/single/:id")
  .get(getProductDetails)
  .put(isAuthenticated, isAdmin, updateProduct)
  .delete(isAuthenticated, isAdmin, deleteProduct);

router.post("/new", isAuthenticated, isAdmin, singleUpload, createProduct);

router
  .route("/images/:id")
  .post(isAuthenticated, isAdmin, singleUpload, addProductImage)
  .delete(isAuthenticated, isAdmin, deleteProductImage);

router.post("/category", isAuthenticated, isAdmin, addCategory);

router.get("/categories", getAllCategories);

router.delete("/category/:id", isAuthenticated, isAdmin, deleteCategory);

export default router;
