import { comparePassword, hashPassword } from "../middleware/authentication.js";
import User from "../model/userSchema.js";
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
  res.json(token);
};

export const signUp = async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    password: await hashPassword(req.body.password),
  });

  const token = createJwt(user);
  res.json(token);
};
