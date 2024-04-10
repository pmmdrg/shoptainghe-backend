/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - address
 *         - city
 *         - country
 *         - pinCode
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         password:
 *           type: string
 *           minLength: 6
 *           description: The password of the user (must be at least 6 characters long)
 *         address:
 *           type: string
 *           description: The address of the user
 *         city:
 *           type: string
 *           description: The city of the user
 *         country:
 *           type: string
 *           description: The country of the user
 *         pinCode:
 *           type: integer
 *           format: int32
 *           description: The pin code of the user
 *         role:
 *           type: string
 *           enum: 
 *             - admin
 *             - user
 *           default: user
 *           description: The role of the user
 *         avatar:
 *           type: object
 *           properties:
 *             public_id:
 *               type: string
 *               description: The public ID of the avatar image
 *             url:
 *               type: string
 *               description: The URL of the avatar image
 *         otp:
 *           type: integer
 *           description: One-Time Password for user authentication
 *         otp_expire:
 *           type: string
 *           format: date-time
 *           description: Expiration date and time of the One-Time Password
 */
/**
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API endpoints for user management
 * paths:
 *   /user/new:
 *     post:
 *       summary: Register a new user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 avatar:
 *                   type: string
 *                   format: binary
 *       responses:
 *         '200':
 *           description: Successfully registered a new user
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '400':
 *           description: Bad request, registration failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /user/login:
 *     post:
 *       summary: Login user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Successfully logged in
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, login failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /user/me:
 *     get:
 *       summary: Get current user information
 *       tags: [Users]
 *       responses:
 *         '200':
 *           description: Successfully retrieved user information
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   user:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *         '401':
 *           description: Unauthorized, user information retrieval failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /user/logout:
 *     get:
 *       summary: Logout user
 *       tags: [Users]
 *       responses:
 *         '200':
 *           description: Successfully logged out
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, logout failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /user/changepassword:
 *     put:
 *       summary: Update user password
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 oldPassword:
 *                   type: string
 *                 newPassword:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Successfully updated user password
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, failed to update user password
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /user/updateprofile:
 *     put:
 *       summary: Update user profile
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 address:
 *                   type: string
 *                 city:
 *                   type: string
 *                 country:
 *                   type: string
 *                 pinCode:
 *                   type: number
 *       responses:
 *         '200':
 *           description: Successfully updated user profile
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, failed to update user profile
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *   /user/updatepic:
 *     put:
 *       summary: Update user profile picture
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 avatar:
 *                   type: string
 *                   format: binary
 *       responses:
 *         '200':
 *           description: Successfully updated user profile picture
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '401':
 *           description: Unauthorized, failed to update user profile picture
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
  changePassword,
  forgetpassword,
  getMyProfile,
  login,
  logOut,
  resetpassword,
  signup,
  updatePic,
  updateProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/login", login);

router.post("/new", singleUpload, signup);

router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", isAuthenticated, logOut);

// Updating Routes
router.put("/updateprofile", isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, changePassword);
router.put("/updatepic", isAuthenticated, singleUpload, updatePic);

// Forget Password & Reset Password
router.route("/forgetpassword").post(forgetpassword).put(resetpassword);

export default router;
