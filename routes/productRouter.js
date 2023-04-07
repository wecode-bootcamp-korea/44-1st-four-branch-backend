const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/search', productController.productSearch);
router.get('', productController.getProducts);

module.exports = {
  router,
};
