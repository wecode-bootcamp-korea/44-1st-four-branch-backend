const cartService = require('../services/cartService');
const { catchAsync } = require('../utils/error');

const addToCart = catchAsync(async (req, res) => {
  const { productId } = req.body;

  await cartService.addToCart(productId, req.userId);

  res.status(200).json({ message: 'ITEM_ADDED_TO_CART' });
});

const deleteFromCart = catchAsync(async (req, res) => {
  const { pId } = req.query;

  await cartService.deleteFromCart(pId, req.userId);

  res.status(204).send();
});

module.exports = {
  addToCart,
  deleteFromCart,
};
