const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const payByPoint = catchAsync(async (req, res) => {
  const { orderNumber } = req.body;
  if (!orderNumber) {
    const err = new Error('KEY_ERROR');
    err.statusCode = 400;
    throw err;
  }
  const user = await orderService.payByPoint(orderNumber, req.user.id);
  const [orderInfo] = await orderService.getOrderInfo(req.user.id);
  return res.status(200).json({ user: user, orderInfo: orderInfo });
});

const createOrder = catchAsync(async (req, res) => {
  const { totalPrice } = req.body;
  const userId = req.user.id;
  if (!totalPrice) {
    const error = new Error('KEY ERROR');
    error.statusCode = 400;
    throw error;
  }
  await orderService.createOrder(userId, totalPrice);
  const [orderInfo] = await orderService.getOrderInfo(userId);
  res.status(201).json(orderInfo);
});

const getOrderInfo = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const orderInfo = await orderService.getOrderInfo(userId);
  res.status(200).json(orderInfo);
});

module.exports = {
  payByPoint,
  createOrder,
  getOrderInfo,
};
