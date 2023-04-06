const productDao = require('../models/productDao');

const getProductsByCondition = async (subId, mainId, pId, isMain) => {
  return productDao.getProductsByCondition(subId, mainId, pId, isMain);
};

module.exports = {
  getProductsByCondition,
};
