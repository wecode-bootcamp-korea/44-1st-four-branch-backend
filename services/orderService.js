const { v4: uuid } = require('uuid');

const orderDao = require('../models/orderDao');

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
  createOrder,
  orderItems,
  orderInfo,
};
