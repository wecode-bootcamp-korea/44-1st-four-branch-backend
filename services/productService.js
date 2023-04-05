const productDao = require('../models/productDao');

const getProductsBySubCategory = async (subCategory) => {
  return productDao.getProductsByCategory(subCategory);
};

const getAllProducts = async () => {
  return productDao.getAllProducts();
};

module.exports = {
  getProductsBySubCategory,
  getAllProducts,
};
