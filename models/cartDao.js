const appDataSource = require('./appDataSource');

const addToCart = async (productId, quantity, userId) => {
  return await appDataSource.query(
    `INSERT INTO carts(
            product_id,
            quantity,
            user_id
        ) VALUES (?, ?, ?)`,
    [productId, quantity, userId]
  );
};

const deleteFromCart = async (pId, userId) => {
  return await appDataSource.query(
    `DELETE FROM carts
    WHERE user_id = ? AND product_id= ?`,
    [userId, pId]
  );
};

module.exports = {
  addToCart,
  deleteFromCart,
};
