const Product = require("../models/products.model");
const Provider = require("../models/providers.model");

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
// UPDATE
async function editProduct({ id, title, price, description, company_name }) {
  try {
    let updateData = { title, price, description };

    if (company_name) {
      const provider = await Provider.findOne({ company_name });
      if (!provider) throw new Error("Proveedor no encontrado");
      updateData.provider = provider._id;
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedProduct) throw new Error("Producto no encontrado.");

    return {
      message: `Producto actualizado: ${title}`,
      product: updatedProduct,
    };
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    throw new Error("No se pudo actualizar el producto.");
  }
}


module.exports = {
  createProduct,
  getProduct,
  editProduct,
  //deleteProduct,
};