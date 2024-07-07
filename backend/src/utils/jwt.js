import jwt from "jsonwebtoken";

export const createJwt = (user) => {
  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
  );

  return token;
};
