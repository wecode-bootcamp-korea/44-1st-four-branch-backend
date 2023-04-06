const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

<<<<<<< HEAD
router.get('', productController.productSearch);
=======
router.get('', productController.getProducts);
>>>>>>> main

module.exports = {
  router,
};
