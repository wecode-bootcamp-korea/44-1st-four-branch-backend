const cartService = require('../services/cartService');
const { catchAsync } = require('../utils/error');

const addToCart = catchAsync(async (req, res) => {
  const { productId } = req.body;

  await cartService.addToCart(productId, req.userId);

  res.status(200).json({ message: 'ITEM_ADDED_TO_CART' });
});

const deleteFromCart = catchAsync(async (req, res) => {
  const { pid } = req.query;

  await cartService.deleteFromCart(pid, req.userId);

  res.status(204).send();
});

const readCart = catchAsync(async (req, res) => {
  const cart = await cartService.readCart(req.userId);
  res.status(200).json(cart);
});

module.exports = {
  addToCart,
  deleteFromCart,
  readCart,
};
