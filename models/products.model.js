const mongoose = require("mongoose");
const Provider = require("./providers.model");
const { createProduct } = require("../services/products.services");
require("../config/db_mongo"); // Conexión a BBDD MongoDB

const objectSchema = {
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    required: true
  },
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Product = mongoose.model("Product", productSchema);

module.exports = Product;

/*const p1 = new Product({
  title: "Tortilla Marquina Premium",
  price: 2.20,
  description: "Una tortilla mejorada de calidad premium",
  provider: "680ead046db0e2b31fba3f2f"
});

p1.save()
.then(data => console.log("Producto guardado:", data))
.catch(error => console.error(error));*/

/*const p2 = new Product({
  title: "Tacos Flauta",
  price: 2.20,
  description: "Unos deliciosos tacos flautas de pollo",
  provider: "680a66cff74a77e3808c5a16"
});

p2.save()
.then(data => console.log("Producto guardado:", data))
.catch(error => console.error(error)); */

/*const p3 = new Product({
  title: "Baleadas sencillas",
  price: 1.5,
  description: "Deliciosas baleadas sencillas con frijoles y queso",
  provider: "680a66cff74a77e3808c5a16"
});

p3.save()
.then(data => console.log("Producto guardado:", data))
.catch(error => console.error(error)); */


//Ejemplo para crear un nuevo producto
/*const p4 = new Product({
  title: "Corte Caballero",
  price: 6,
  description: "Un corte de cabello accesible para los caballeros de la tercera edad",
  provider: "680a66cff74a77e3808c5a16"
});

p4.save()
.then(data => console.log("Producto guardado:", data))
.catch(error => console.error(error)); */

//EJEMPLO PARA HACER UN UPDATE DE UN PRODUCT
/*{
  "id": "680eb4175bf88f324930a97b", //id_product
  "title": "Tarta de tres leches",
  "price": 3.99,
  "description": "Deliciosa porcion de tarta de tres leches"
}*/