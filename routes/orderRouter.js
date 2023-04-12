const express = require('express');

const orderController = require('../controllers/orderController');
const loginReq = require('../utils/auth');

const router = express.Router();

router.post('', loginReq, orderController.createOrder);
router.get('', loginReq, orderController.orderInfo);

module.exports = {
  router,
};
