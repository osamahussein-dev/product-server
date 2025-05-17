import express from "express";

const productsRouter = express.Router();

let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
];

productsRouter.get("/", (req, res) => {
  res.json(products);
});

productsRouter.get("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  res.json(product);
});

productsRouter.post("/", (req, res) => {
  const product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.json(product);
});

export default productsRouter;
