const providerService = require("../services/providers.services.js");

// CREATE
const createProvider = async (req, res) => {
  console.log(req.body);

  try {
    const data = req.body;
    let answer = await providerService.createProvider(data);
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// READ
const getProvider = async (req, res) => {
  try {
    const id = req.params.id;
    let providers = await providerService.getProvider(id);
    res.status(200).json(providers);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// UPDATE
const editProvider = async (req, res) => {
  try {
    const data = req.body;
    let answer = await providerService.editProvider(data);
    res.status(200).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// DELETE
const deleteProvider = async (req, res) => {
  try {
    const { company_name } = req.body;
    let answer = await providerService.deleteProvider(company_name);
    res.status(200).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
  createProvider,
  getProvider,
  editProvider,
  deleteProvider,
};
