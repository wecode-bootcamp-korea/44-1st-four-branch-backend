const productDao = require('../models/productDao');

const searchProduct = async (keyword) => {
  return productDao.searchProduct(keyword);
};

const getProductsByCondition = async (
  subId,
  mainId,
  pId,
  isMain,
  orderBy,
  sorting,
  offset,
  limit
) => {
  if (!orderBy !== !sorting) {
    const err = new Error('CONDITION_NEEDS_TO_BE_PAIR');
    err.statusCode = 400;
    throw err;
  }

  if (!offset !== !limit) {
    const err = new Error('CONDITION_NEEDS_TO_BE_PAIR');
    err.statusCode = 400;
    throw err;
  }

  return productDao.getProductsByCondition(
    subId,
    mainId,
    pId,
    isMain,
    orderBy,
    sorting,
    offset,
    limit
  );
};

module.exports = {
  searchProduct,
  getProductsByCondition,
};
