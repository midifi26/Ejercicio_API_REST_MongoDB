const Product = require("../models/products.model");
const Provider = require("../models/provider.model");

async function createProduct({
  title,
  price,
  description,
  company_name,
}) {
  const provider = await Provider.find({ company_name });
  const provider_id = provider[0]._id.toString();

  const product = new Product({
    title,
    price,
    description,
    provider: provider_id,
  });

  const result = await product.save();
  console.log(result);
}

async function getProduct(id) {
  try {
    let products = id
      ? await Product.find({ id }, "-_id -__v").populate(
          "provider",
          "-_id -__v"
        )
      : await Product.find({}, "-_id -__v").populate("provider", "-_id -__v"); //{}
    return products;
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

module.exports = {
  createProduct,
  getProduct,
  // editProduct,
  // deleteProduct
};