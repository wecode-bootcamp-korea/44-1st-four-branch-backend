const cartService = require('../services/cartService');
const { catchAsync } = require('../utils/error');

const addToCart = catchAsync(async (req, res) => {
  const { productId, quantity, userId } = req.body;

  await cartService.addToCart(productId, quantity, userId);

  res.status(200).json({ message: 'ITEM_ADDED_TO_CART' });
});

const deleteFromCart = catchAsync(async (req, res) => {
  //for test - 추후 변경 예정
  const { pId, userId } = req.query;
  //const { pId } = req.query;

  //await cartService.deleteFromCart(pId, req.userId);

  await cartService.deleteFromCart(pId, userId);

  res.status(204).send();
});

module.exports = {
  addToCart,
  deleteFromCart,
};
