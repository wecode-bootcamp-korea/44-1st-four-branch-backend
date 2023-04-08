const express = require('express');

const orderController = require('../controllers/orderController');
const loginReq = require('../utils/auth');

const router = express.Router();

router.post('/pointpay', loginReq, orderController.payByPoint);

module.exports = {
  router,
};
