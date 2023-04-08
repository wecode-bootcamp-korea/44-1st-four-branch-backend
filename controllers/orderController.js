const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const orderInfo = catchAsync(async (req, res) => {
  const { totalPrice } = req.body;
  const userId = req.userId;
  if (!totalPrice) {
    const error = new Error('KEY ERROR');
    error.statusCode = 400;
    return error;
  }
  await orderService.orderInfo(userId, totalPrice);
  res.status(201).json({ message: 'ORDER DEPOSIT' });
});

module.exports = {
  orderInfo,
};
