const cartService = require('../services/cartService');
const { catchAsync } = require('../utils/error');

const addToCart = catchAsync(async (req, res) => {
  const { productId, quantity, userId } = req.body;

  await cartService.addToCart(productId, quantity, userId);

  res.status(200).json({ message: 'ITEM_ADDED_TO_CART' });
});

module.exports = {
  addToCart,
};
