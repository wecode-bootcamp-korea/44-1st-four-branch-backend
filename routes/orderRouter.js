const express = require('express');

const orderController = require('../controllers/orderController');
const loginReq = require('../utils/auth');

const router = express.Router();

router.post('/pointpay', loginReq, orderController.payByPoint);
router.post('', loginReq, orderController.createOrder);
router.get('', loginReq, orderController.getOrderInfo);

module.exports = {
  router,
};
