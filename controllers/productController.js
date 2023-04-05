const productService = require('../services/productService');
const { catchAsync } = require('../utils/error');

const productsBySubCategory = catchAsync(async (req, res) => {
  const subCategory = Number(req.query.sub);

  if (!subCategory) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }

  const productsByCategory = await productService.getProductsBySubCategory(
    subCategory
  );

  res.status(200).json(productsByCategory);
});

const getAllProducts = catchAsync(async (req, res) => {
  const allProducts = await productService.getAllProducts();
  res.status(200).json(allProducts);
});

module.exports = {
  productsBySubCategory,
  getAllProducts,
};
