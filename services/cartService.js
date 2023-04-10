const cartDao = require('../models/cartDao');

const addToCart = async (productId, userId) => {
  await cartDao.createOrUpateCart(productId, userId);
  return cartDao.getCart(userId);
};

const deleteFromCart = async (cartId, userId) => {
  await cartDao.deleteFromCart(cartId, userId);
  return cartDao.getCart(userId);
};

const readCart = async (userId) => {
  return cartDao.getCart(userId);
};

const changeQuantity = async (cartId, quantity, userId) => {
  await cartDao.changeQuantity(cartId, quantity, userId);
  return cartDao.getCart(userId);
};

module.exports = {
  addToCart,
  deleteFromCart,
  readCart,
  changeQuantity,
};
