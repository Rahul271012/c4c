import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("TEST ROUTE");
});

export default router;
