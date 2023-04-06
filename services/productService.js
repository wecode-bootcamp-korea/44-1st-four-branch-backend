const productDao = require('../models/productDao');

const getProductsByCondition = async (subid, mainid, pid, ismain) => {
  return productDao.getProductsByCondition(subid, mainid, pid, ismain);
};

module.exports = {
  getProductsByCondition,
};
