const productService = require('../services/productService');
const { catchAsync } = require('../utils/error');

const getProducts = catchAsync(async (req, res) => {
  const subCategory = Number(req.query.subid);
  const mainCategory = Number(req.query.mainid);
  const isMain = Number(req.query.ismain);
  const productId = Number(req.query.pid);

  if (subCategory) {
    const products = await productService.getProductsBySubCategory(subCategory);
    res.status(200).json(products);
  } else if (mainCategory) {
    const products = await productService.getProductsByMainCategory(
      mainCategory
    );
    res.status(200).json(products);
  } else if (productId) {
    const product = await productService.getProductById(productId);
    res.status(200).json(product);
  } else if (isMain) {
    const products = await productService.getMainProducts(isMain);
    res.status(200).json(products);
  } else {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  }
});

module.exports = {
  getProducts,
};
