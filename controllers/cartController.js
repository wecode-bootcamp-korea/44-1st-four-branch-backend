const cartService = require('../services/cartService');
const { catchAsync } = require('../utils/error');

const addToCart = catchAsync(async (req, res) => {
  const { productId } = req.body;

  const carts = await cartService.addToCart(productId, req.userId);

  res.status(200).json(carts);
});

const deleteFromCart = catchAsync(async (req, res) => {
  const { cartid: cartId } = req.query;

  const carts = await cartService.deleteFromCart(cartId, req.userId);

  res.status(200).json(carts);
});

const readCart = catchAsync(async (req, res) => {
  const carts = await cartService.readCart(req.userId);
  res.status(200).json(carts);
});

const changeQuantity = catchAsync(async (req, res) => {
  const { cartId, quantity } = req.body;
  const carts = await cartService.changeQuantity(cartId, quantity, req.userId);
  res.status(201).json(carts);
});

module.exports = {
  addToCart,
  deleteFromCart,
  readCart,
  changeQuantity,
};
