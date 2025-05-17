import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productsRouter from "./product.js";

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Finally!! I Did My First Server");
});

app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`PORT ${PORT} Is Listening`);
});
