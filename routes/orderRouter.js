const express = require('express');
const orderController = require('../controllers/orderController');
const token = require('../utils/auth');

const router = express.Router();

router.post('', token, orderController.orderInfo);

module.exports = {
  router,
};
