const orderDao = require('../models/orderDao');
const userDao = require('../models/userDao');
const { v4: uuid } = require('uuid');

const payByPoint = async (orderNumber, userId) => {
  await orderDao.payByPoint(orderNumber, userId);
  return userDao.getUserById(userId);
};

const createOrder = async (userId, totalprice, statusid) => {
  const orderNum = uuid();
  return orderDao.createOrder(userId, totalprice, orderNum, statusid);
};

const orderItems = async (userId) => {
  return orderDao.orderItems(userId);
};

const orderInfo = async (userId) => {
  return orderDao.orderInfo(userId);
};

module.exports = {
  payByPoint,
  createOrder,
  orderItems,
  orderInfo,
};
