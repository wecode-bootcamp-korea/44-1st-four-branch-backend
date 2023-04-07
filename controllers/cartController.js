const cartService = require('../services/cartService');
const { catchAsync } = require('../utils/error');

const addToCart = catchAsync(async (req, res) => {
  const { productId } = req.body;

  await cartService.addToCart(productId, req.userId);

  res.status(200).json({ message: 'ITEM_ADDED_TO_CART' });
});

const deleteFromCart = catchAsync(async (req, res) => {
  const { cartid: cartId } = req.query;

  await cartService.deleteFromCart(cartId);

  res.status(200).json({});
});

module.exports = {
  addToCart,
  deleteFromCart,
};
