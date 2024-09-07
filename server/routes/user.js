import express from "express";

import User from "../models/user.js";

const router = express.Router();

router.post("/post", async (req, res) => {
  const { email, name, picture } = req.body;
  const user = new User({ email: email, name: name, picture: picture });
  await user.save();
  //   console.log(req.body);

  res.sendStatus(200);
});

export default router;
