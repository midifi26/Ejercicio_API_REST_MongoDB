const Provider = require("../models/providers.model");

// CREATE
async function createProvider({ company_name, CIF, address, url_web }) {
  try {
    const provider = new Provider({
      company_name,
      CIF,
      address,
      url_web,
    });

    const result = await provider.save();
    return {
      message: "Proveedor creado",
      provider: result,
    };
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    throw new Error("No se pudo crear el proveedor.");
  }
}

// READ
async function getProvider(id) {
  try {
    let providers = id
      ? await Provider.findById(id, "-__v")
      : await Provider.find({}, "-__v");
    return providers;
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    throw new Error("No se pudo obtener el/los proveedor(es).");
  }
}

// UPDATE
async function editProvider({ id, company_name, CIF, address, url_web }) {
  try {
    const updatedProvider = await Provider.findByIdAndUpdate(
      id,
      { company_name, CIF, address, url_web },
      { new: true } // para que retorne el objeto actualizado
    );

    if (!updatedProvider) throw new Error("Proveedor no encontrado.");

    return {
      message: `Proveedor actualizado: ${company_name}`,
      provider: updatedProvider,
    };
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    throw new Error("No se pudo actualizar el proveedor.");
  }
}

// DELETE
async function deleteProvider(company_name) {
  try {
    const deletedProvider = await Provider.findOneAndDelete({ company_name });

    if (!deletedProvider) throw new Error("Proveedor no encontrado.");

    return {
      message: `Se ha borrado el proveedor: ${company_name}`,
    };
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    throw new Error("No se pudo borrar el proveedor.");
  }
}

module.exports = {
  createProvider,
  getProvider,
  editProvider,
  deleteProvider,
};
