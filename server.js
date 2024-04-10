import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import ip from "ip";

import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import cloudinary from "cloudinary";
import Stripe from "stripe";

connectDB();

export const stripe = new Stripe(process.env.STRIPE_API_SECRET);

stripe.paymentIntents
  .create({
    amount: Number(5000 * 100),
    currency: "inr",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  const PORT = process.env.PORT;
  console.log(
    `Example server listening at http://localhost:${PORT} - http://${ip.address()}:${PORT}`
  );
});
