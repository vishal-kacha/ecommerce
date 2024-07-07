import { Router } from "express";

const router = new Router();

router.get("/", (_req, res) => {
  res.json({ message: "hello" });
});

export default router;
