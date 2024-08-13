import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// ROUTES
import postRoutes from "./routes/post.js";

const app = express();

// USE ROUTES
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URL;

//
mongoose
  .connect(DB_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
