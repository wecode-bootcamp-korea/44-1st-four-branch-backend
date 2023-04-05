const productService = require('../services/productService');
const { catchAsync } = require('../utils/error');

const productSearch = catchAsync(async (req, res) => {
  const { name } = req.query;
  const search = await productService.searchProduct(name);
  return res.status(200).json({ data: search });
});

module.exports = {
  productSearch,
};
