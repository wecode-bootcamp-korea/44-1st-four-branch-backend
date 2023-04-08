const orderDao = require('../models/orderDao');
const userDao = require('../models/userDao');

const payByPoint = async (orderNumber, userId) => {
  await orderDao.payByPoint(orderNumber, userId);
  return userDao.getUserById(userId);
};

module.exports = {
  payByPoint,
};
