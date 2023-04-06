const cartService = require('../services/cartService');
const { catchAsync } = require('../utils/error');

const addToCart = catchAsync(async (req, res) => {
  //for test - 추후 변경 예정
  const { productId, userId } = req.body;

  //실제 코드
  //const { productId } = req.body;

  //for test - 추후 변경 예정
  await cartService.addToCart(productId, userId);

  //실제 코드
  //await cartService.addToCart(productId, req.userId);

  res.status(200).json({ message: 'ITEM_ADDED_TO_CART' });
});

const deleteFromCart = catchAsync(async (req, res) => {
  //for test - 추후 변경 예정
  const { pid, userid } = req.query;
  //const { pId } = req.query;

  //await cartService.deleteFromCart(pId, req.userId);

  await cartService.deleteFromCart(pid, userid);

  res.status(204).send();
});

module.exports = {
  addToCart,
  deleteFromCart,
};
