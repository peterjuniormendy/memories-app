import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// ROUTES
import postRoutes from "./routes/post.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// MAIN ROUTE
app.get("/", (req, res) => {
  res.send("Hello user!, welcome to the memories api ");
});

// USE ROUTES
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URL;

// Connect to the DB
mongoose
  .connect(DB_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
