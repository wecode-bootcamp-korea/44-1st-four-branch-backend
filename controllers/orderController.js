const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const payByPoint = catchAsync(async (req, res) => {
  const { orderNumber } = req.body;

  await orderService.payByPoint(orderNumber);

  res.status(200).json({ message: 'PAYMENT_COMPLETE' });
});

module.exports = {
  payByPoint,
};
