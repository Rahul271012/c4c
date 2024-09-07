import express from "express";
import dotenv from "dotenv";
import * as mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import testRouter from "./routes/test.js";

import connect from "./db/db.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

connect(process.env.MONGO_URI);

//Router Use()

app.use("/test", testRouter);

app.listen(6969, () => {
  console.log("Listening on 6969...");
});
