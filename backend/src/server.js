import express from "express";
import cors from "cors";
import router from "./routes.js";
import { protect } from "./middleware/authentication.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protect, router);

export default app;
