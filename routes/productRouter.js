const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('', productController.getProducts);
// router.get('/subc', productController.productsBySubCategory);
// router.get('/mainc', productController.productsByMainCategory);

module.exports = {
  router,
};
