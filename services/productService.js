const productDao = require('../models/productDao');

const getProductsByCategory = async (subCategory) => {
  return productDao.getProductsByCategory(subCategory);
};

module.exports = {
  getProductsByCategory,
};
