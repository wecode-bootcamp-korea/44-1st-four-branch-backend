const orderDao = require('../models/orderDao');
const userDao = require('../models/userDao');
const { v4: uuid } = require('uuid');

const payByPoint = async (orderNumber, userId) => {
  const user = await userDao.getUserById(userId);
  const [order] = await orderDao.orderInfo(userId);

  if (user.point < order.totalPrice) {
    const err = new Error('INSUFFICIENT_POINT');
    err.statusCode = 400;
    throw err;
  }

  await orderDao.payByPoint(orderNumber, userId);
  return await userDao.getUserById(userId);
};

const createOrder = async (userId, totalPrice) => {
  const orderNum = uuid();
  return orderDao.createOrder(userId, totalPrice, orderNum);
};

const orderInfo = async (userId) => {
  return orderDao.orderInfo(userId);
};

module.exports = {
  payByPoint,
  createOrder,
  orderInfo,
};
