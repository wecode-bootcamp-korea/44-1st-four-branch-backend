const orderDao = require('../models/orderDao');

const createOrder = async (userId, totalprice, statusid) => {
  return orderDao.createOrder(userId, totalprice, statusid);
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
