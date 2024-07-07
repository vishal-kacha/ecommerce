import { comparePassword, hashPassword } from "../middleware/authentication.js";
import User from "../model/userSchema.js";
import Product from "../model/productSchema.js";
import { createJwt } from "../utils/jwt.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const signIn = async (req, res) => {
  const user = await User.find({
    username: req.body.username,
  });

  if (!user) {
    res.json({ message: "no user found" });
    return;
  }

  const isValid = comparePassword(req.body.password, req.body.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "nope" });
    return;
  }

  const token = createJwt(user);
  res.status(200).json({ token });
};

export const signUp = async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    password: await hashPassword(req.body.password),
  });

  const token = createJwt(user);
  res.status(200).json({ token });
};

export const addToCart = async (req, res) => {
  const user = await User.findOne(req.user.id);

  const productId = req.body.productId;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  user.carts.push(product);

  await user.save();
  res.status(200).json({ message: "Product added to cart", carts: user.carts });
};
