const express = require('express');
const cartController = require('../controllers/cartController');
const loginReq = require('../utils/auth');

const router = express.Router();

//router.post('', loginReq, cartController.addToCart);
router.post('', cartController.addToCart);

module.exports = {
  router,
};
