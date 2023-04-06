const orderDao = require('../models/orderDao');

const orderInfo = async (userid, totalprice, number, statusid, addressid) => {
  return orderDao.orderInfo(userid, totalprice, number, statusid, addressid);
};

module.exports = {
  orderInfo,
};
