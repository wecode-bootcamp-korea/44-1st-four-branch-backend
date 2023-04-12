const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const payByPoint = catchAsync(async (req, res) => {
  const { orderNumber } = req.body;

  const user = await orderService.payByPoint(orderNumber, req.user.id);

  return res.status(200).json(user);
});

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

const orderInfo = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const orderDetail = await orderService.orderInfo(userId);
  res.status(200).json(orderDetail);
});

module.exports = {
  payByPoint,
  createOrder,
  orderInfo,
};
