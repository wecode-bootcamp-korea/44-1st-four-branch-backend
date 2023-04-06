const cartDao = require('../models/cartDao');

const addToCart = async (productId, userId) => {
//이미 존재하는 아이템인지 확인하기
  if(){}
  return cartDao.addToCart(productId, userId);

//이미 존재하는 아이템이면 수량 + 1
};


const deleteFromCart = async (pId, userId) => {
  return cartDao.deleteFromCart(pId, userId);
};



module.exports = {
  addToCart,
  deleteFromCart,
};
