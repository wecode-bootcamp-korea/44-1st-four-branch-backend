const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const createOrder = catchAsync(async (req, res) => {
  const { totalPrice } = req.body;
  const userId = req.user.id;
  if (!totalPrice) {
    const error = new Error('KEY ERROR');
    error.statusCode = 400;
    return error;
  }
  await orderService.createOrder(userId, totalPrice);
  res.status(201).json({ message: 'ORDER DEPOSIT' });
});

const orderItems = catchAsync(async (req, res) => {
  const userId = req.user.id;
  await orderService.orderItems(userId);
  res.status(201).json({ message: 'SUCCESS' });
});

const orderInfo = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const orderDetail = await orderService.orderInfo(userId);
  res.status(201).json(orderDetail);
});

module.exports = {
  createOrder,
  orderItems,
  orderInfo,
};
