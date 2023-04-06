const productService = require('../services/productService');
const { catchAsync } = require('../utils/error');

const getProducts = catchAsync(async (req, res) => {
  const { subid, mainid, pid, ismain } = req.query;

  const products = await productService.getProductsByCondition(
    subid,
    mainid,
    pid,
    ismain
  );
  res.status(200).json(products);
});

module.exports = {
  getProducts,
};
