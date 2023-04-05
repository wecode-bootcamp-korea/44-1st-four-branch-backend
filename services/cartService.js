const cartDao = require('../models/cartDao');

const addToCart = async (productId, quantity, userId) => {
  return cartDao.addToCart(productId, quantity, userId);
};

module.exports = {
  addToCart,
};
