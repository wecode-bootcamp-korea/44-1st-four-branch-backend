const cartDao = require('../models/cartDao');

const addToCart = async (productId, quantity, userId) => {
  return cartDao.addToCart(productId, quantity, userId);
};

const deleteFromCart = async (pId, userId) => {
  return cartDao.deleteFromCart(pId, userId);
};

module.exports = {
  addToCart,
  deleteFromCart,
};
