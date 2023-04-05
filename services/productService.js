const productDao = require('../models/productDao');

const searchProduct = async (name) => {
  return productDao.searchProduct(name);
};

module.exports = {
  searchProduct,
};
