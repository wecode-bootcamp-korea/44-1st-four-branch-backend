const express = require('express');
const orderController = require('../controllers/orderController');
const loginReq = require('../utils/auth');

const router = express.Router();

router.post('', loginReq, orderController.createOrder);
router.post('/carts', loginReq, orderController.orderItems);
router.get('', loginReq, orderController.orderInfo);

module.exports = {
  router,
};
