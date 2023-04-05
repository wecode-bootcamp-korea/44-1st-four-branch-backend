const productDao = require('../models/productDao');

const getProductsBySubCategory = async (subCategory) => {
  return productDao.getProductsBySubCategory(subCategory);
};

const getProductsByMainCategory = async (mainCategory) => {
  return productDao.getProductsByMainCategory(mainCategory);
};

const getAllProducts = async () => {
  return productDao.getAllProducts();
};

const getProductById = async (productId) => {
  return productDao.getProductById(productId);
};

const getMainProducts = async (isMain) => {
  return productDao.getMainProducts(isMain);
};

module.exports = {
  getProductsBySubCategory,
  getProductsByMainCategory,
  getProductById,
  getAllProducts,
  getMainProducts,
};
