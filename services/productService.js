const productDao = require('../models/productDao');

const searchProduct = async (keyword) => {
  return productDao.searchProduct(keyword);
};

module.exports = {
  searchProduct,
};
