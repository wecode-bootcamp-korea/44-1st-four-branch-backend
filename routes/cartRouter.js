const express = require('express');
const cartController = require('../controllers/cartController');
const loginReq = require('../utils/auth');

const router = express.Router();

router.post('', loginReq, cartController.addToCart);
router.delete('', loginReq, cartController.deleteFromCart);
router.get('', loginReq, cartController.readCart);
router.patch('', loginReq, cartController.changeQuantity);

module.exports = {
  router,
};
