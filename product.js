import express from "express";

const productsRouter = express.Router();

let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
];

//GET all
productsRouter.get("/", (req, res) => {
  res.json(products);
});

//GET by id
productsRouter.get("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  res.json(product);
});

//POST
productsRouter.post("/", (req, res) => {
  const product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.json(product);
});

//PUT by id
productsRouter.put("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  res.json(product);
});

//DELETE by id
productsRouter.delete("/:id", (req, res) => {
  products = products.filter((p) => p.id != req.params.id);
  res.end();
});

export default productsRouter;
