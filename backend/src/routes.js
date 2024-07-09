import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
} from "./handlers/producthandler.js";
import { addToCart } from "./handlers/userHandler.js";

const router = new Router();

router.get("/", (_req, res) => {
  res.json({ message: "hello" });
});

router.post("/add-product", addProduct);
router.delete("/delete-product", deleteProduct);
router.post("/add-to-cart", addToCart);

export default router;
