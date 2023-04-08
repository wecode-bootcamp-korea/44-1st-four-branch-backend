const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const payByPoint = catchAsync(async (req, res) => {
  const { orderNumber } = req.body;

  const user = await orderService.payByPoint(orderNumber, req.user.id);

  return res.status(200).json(user);
});

module.exports = {
  payByPoint,
};
