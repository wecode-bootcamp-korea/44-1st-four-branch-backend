const cartDao = require('../models/cartDao');

const addToCart = async (productId, userId) => {
  const isFirst = await cartDao.checkIfFirst(productId, userId);

  if (isFirst) {
    return cartDao.addToCart(productId, userId);
  } else {
    return cartDao.plusItemCount(productId, userId);
  }
};

const deleteFromCart = async (pId, userId) => {
  return cartDao.deleteFromCart(pId, userId);
};

const readCart = async (userId) => {
  return cartDao.getCart(userId);
};

module.exports = {
  addToCart,
  deleteFromCart,
  readCart,
};
