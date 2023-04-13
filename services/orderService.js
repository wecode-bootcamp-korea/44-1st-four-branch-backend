const orderDao = require('../models/orderDao');
const userDao = require('../models/userDao');
const { v4: uuid } = require('uuid');

const payByPoint = async (orderNumber, userId) => {
  const user = await userDao.getUserById(userId);
  const [order] = await orderDao.getOrderInfo(userId);
  console.log(user);
  console.log(order);
  if (user.point - order.totalPrice < 0) {
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

const getOrderInfo = async (userId) => {
  return orderDao.getOrderInfo(userId);
};

module.exports = {
  payByPoint,
  createOrder,
  getOrderInfo,
};
