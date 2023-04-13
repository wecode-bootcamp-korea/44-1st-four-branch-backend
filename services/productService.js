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
