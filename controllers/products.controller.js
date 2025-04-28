const productService = require("../services/products.services.js");

// CREATE
const createProduct = async (req, res) => {
  try {
    const data = req.body;
    let answer = await productService.createProduct(data);
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ message: `ERROR: ${error.message}` });
  }
};

// READ
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    let products = await productService.getProduct(id);
    res.status(200).json(products);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ message: `ERROR: ${error.message}` });
  }
};

// UPDATE
const editProduct = async (req, res) => {
  try {
    const data = req.body;
    let answer = await productService.editProduct(data);
    res.status(200).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ message: `ERROR: ${error.message}` });
  }
};



module.exports = {
  createProduct,
  getProduct,
  editProduct
};
