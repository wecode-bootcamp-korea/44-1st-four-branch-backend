const orderDao = require('../models/orderDao');
const userDao = require('../models/userDao');
const { v4: uuid } = require('uuid');

const payByPoint = async (orderNumber, userId) => {
  if (!orderNumber) {
    const err = new Error('ORDERNUMBER_NEEDED');
    err.statusCode = 400;
    throw err;
  }
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
  await orderDao.createOrder(userId, totalPrice, orderNum);
  return orderNum;
};

const orderInfo = async (userId) => {
  return orderDao.orderInfo(userId);
};

module.exports = {
  payByPoint,
  createOrder,
  orderInfo,
};
