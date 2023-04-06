const { catchAsync } = require('../utils/error');
const orderService = require('../services/orderService');

const orderInfo = catchAsync(async (req, res) => {
  const { userid, totalprice, number, statusid, addressid } = req.body;
  if (!userid || !totalprice || !number || !statusid || !addressid) {
    const error = new Error('KEY ERROR');
    error.statusCode = 400;
    return error;
  }

  await orderService.orderInfo(userid, totalprice, number, statusid, addressid);
  res.status(201).json({ message: 'ORDER DEPOSIT' });
});

module.exports = {
  orderInfo,
};
