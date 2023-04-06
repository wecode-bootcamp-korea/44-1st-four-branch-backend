const appDataSource = require('./appDataSource');

const addToCart = async (productId, userId) => {
  return await appDataSource.query(
    `INSERT INTO carts(
            product_id,
            user_id,
            quantity
        ) VALUES (?, ?, 1)`,
    [productId, userId]
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
