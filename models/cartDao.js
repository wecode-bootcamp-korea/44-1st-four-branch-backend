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

module.exports = {
  addToCart,
};
