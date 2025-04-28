const providersController = require('../controllers/providers.controller.js');
const router = require('express').Router();

router.get("/{:id}", providersController.getProvider);
router.post("/", providersController.createProvider);
router.put("/", providersController.editProvider);



module.exports = router;

