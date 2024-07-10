import { comparePassword, hashPassword } from "../middleware/authentication.js";
import User from "../model/userSchema.js";
import Product from "../model/productSchema.js";
import { createJwt } from "../utils/jwt.js";

export const signIn = async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (!user) {
    res.status(401).json({ message: "no user found" });
    return;
  }

  const isValid = await comparePassword(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "password invalid" });
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
  const user = await User.findOne({ _id: req.user.id });

  const productId = req.body.productId;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  user.carts.push(product);

  await user.save();
  res.status(200).json({ message: "Product added to cart", carts: user.carts });
};

export const listCartItems = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate({
      path: "carts",
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ carts: user.carts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
