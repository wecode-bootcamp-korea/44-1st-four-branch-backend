const cartDao = require('../models/cartDao');

const addToCart = async (productId, userId, quantity) => {
  return cartDao.createOrUpateCart(productId, userId, quantity);
};

const deleteFromCart = async (cartId) => {
  return cartDao.deleteFromCart(cartId);
};

module.exports = {
  addToCart,
  deleteFromCart,
};
