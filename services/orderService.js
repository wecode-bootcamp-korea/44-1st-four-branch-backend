const orderDao = require('../models/orderDao');

const payByPoint = async (orderNumber) => {
  return await orderDao.payByPoint(orderNumber);
};

module.exports = {
  payByPoint,
};
