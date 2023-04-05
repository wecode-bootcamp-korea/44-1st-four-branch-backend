const productService = require('../services/productService');
const { catchAsync } = require('../utils/error');

const getProducts = catchAsync(async (req, res) => {
  const { subId, mainId, pId, isMain } = req.query;

  const products = await productService.getProductsByCondition(
    subId,
    mainId,
    pId,
    isMain
  );
  res.status(200).json(products);
});

module.exports = {
  getProducts,
};
