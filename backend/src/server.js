import express from "express";
import cors from "cors";
import router from "./routes.js";
import { protect } from "./middleware/authentication.js";
import { signIn, signUp } from "./handlers/userHandler.js";
import { getProducts, product } from "./handlers/producthandler.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/checkuser", protect, (req, res) => {
  res.json({ message: "user found" });
});

app.use("/api", protect, router);

app.get("/product/:id", product);
app.get("/products", getProducts);
app.post("/signin", signIn);
app.post("/signup", signUp);
export default app;
