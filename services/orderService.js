const orderDao = require('../models/orderDao');

const orderInfo = async (userId, totalprice, statusid) => {
  return orderDao.orderInfo(userId, totalprice, statusid);
};

module.exports = {
  orderInfo,
};
