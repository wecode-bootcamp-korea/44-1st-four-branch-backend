const productService = require('../services/productService');
const { catchAsync } = require('../utils/error');

const productSearch = catchAsync(async (req, res) => {
  const { keyword } = req.query;
  const search = await productService.searchProduct(keyword);
  return res.status(200).json(search);
});

const getProducts = catchAsync(async (req, res) => {
  const { subid, mainid, pid, ismain, orderby, sorting, offset, limit } =
    req.query;

  const products = await productService.getProductsByCondition(
    subid,
    mainid,
    pid,
    ismain,
    orderby,
    sorting,
    offset,
    limit
  );
  res.status(200).json(products);
});

module.exports = {
  productSearch,
  getProducts,
};
