const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.router();

router.post('/', orderController.orderInfo);

module.exports = {
  router,
};
