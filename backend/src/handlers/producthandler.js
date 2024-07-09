import Product from "../model/productSchema.js";

export const getProducts = async (req, res) => {
  const data = await Product.find();

  res.json(data);
};

export const product = async (req, res) => {
  const product = await Product.findOne({
    _id: req.params.id,
  });

  if (!product) {
    res.status(404).json({ message: "no product found" });
  }

  res.status(200).json(product);
};

export const addProduct = async (req, res) => {
  const data = await Product.create({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description,
  });

  res.json(data);
};

export const deleteProduct = async (req, res) => {
  const data = await Product.deleteOne({
    _id: req.body.id,
  });

  res.json(data);
};
