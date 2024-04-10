/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - shippingInfo
 *         - orderItems
 *         - user
 *         - paymentMethod
 *         - itemsPrice
 *         - taxPrice
 *         - shippingCharges
 *         - totalAmount
 *       properties:
 *         shippingInfo:
 *           type: object
 *           properties:
 *             address:
 *               type: string
 *               description: The shipping address
 *             city:
 *               type: string
 *               description: The city for shipping
 *             country:
 *               type: string
 *               description: The country for shipping
 *             pinCode:
 *               type: integer
 *               description: The postal code for shipping
 *           description: Information related to shipping
 *         orderItems:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the ordered item
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The price of the ordered item
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the ordered item
 *               image:
 *                 type: string
 *                 format: uri
 *                 description: The image URL of the ordered item
 *               product:
 *                 type: string
 *                 format: uuid
 *                 description: The ID of the product associated with the ordered item
 *           description: List of items in the order
 *         user:
 *           type: string
 *           format: uuid
 *           description: The ID of the user who placed the order
 *         paymentMethod:
 *           type: string
 *           enum:
 *             - COD
 *             - ONLINE
 *           default: COD
 *           description: The payment method used for the order
 *         paidAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the payment was made
 *         paymentInfo:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: The ID of the payment transaction
 *             status:
 *               type: string
 *               description: The status of the payment transaction
 *           description: Information related to payment
 *         itemsPrice:
 *           type: number
 *           format: float
 *           description: The total price of all items in the order
 *         taxPrice:
 *           type: number
 *           format: float
 *           description: The total tax amount for the order
 *         shippingCharges:
 *           type: number
 *           format: float
 *           description: The shipping charges for the order
 *         totalAmount:
 *           type: number
 *           format: float
 *           description: The total amount to be paid for the order
 *         orderStatus:
 *           type: string
 *           enum:
 *             - Preparing
 *             - Shipped
 *             - Delivered
 *           default: Preparing
 *           description: The current status of the order
 *         deliveredAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the order was delivered
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the order was created
 */

/**
 * @swagger
 * tags:
 *    - name: Order
 *      description: API endpoints for order management
 * paths:
 *   /order/new:
 *     post:
 *       summary: Place a new order
 *       tags: [Order]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orderItems:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/OrderItem'
 *                 shippingInfo:
 *                   $ref: '#/components/schemas/ShippingInfo'
 *                 paymentMethod:
 *                   type: string
 *                   enum: [COD, ONLINE]
 *                 itemsPrice:
 *                   type: number
 *                 taxPrice:
 *                   type: number
 *                 shippingCharges:
 *                   type: number
 *                 totalAmount:
 *                   type: number
 *                 paymentInfo:
 *                   type: object
 *       responses:
 *         '200':
 *           description: Order placed successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, failed to place order
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /order/single/{id}:
 *     put:
 *       summary: Process an order
 *       tags: [Order]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Order processed successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, failed to process order
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
  createOrder,
  getAdminOrders,
  getLatestProductByOrder,
  getMyOrders,
  getOrderDetails,
  proccessOrder,
  processPayment,
} from "../controllers/order.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, createOrder);
router.post("/payment", isAuthenticated, processPayment);

router.get("/my", isAuthenticated, getMyOrders);
router.get("/admin", isAuthenticated, isAdmin, getAdminOrders);

router.get("/sort", isAuthenticated, getLatestProductByOrder);

router
  .route("/single/:id")
  .get(isAuthenticated, getOrderDetails)
  .put(isAuthenticated, isAdmin, proccessOrder);

export default router;
