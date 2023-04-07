const appDataSource = require('./appDataSource');

const createOrUpateCart = async (productId, userId) => {
  return await appDataSource.query(
    `INSERT INTO carts(
            product_id,
            user_id,
            quantity
        ) VALUES (?, ?, 1)
        ON DUPLICATE KEY UPDATE
        quantity = quantity + 1`,
    [productId, userId]
  );
};

const deleteFromCart = async (cartId) => {
  return await appDataSource.query(
    `DELETE FROM carts
    WHERE id IN (?)`,
    [cartId]
  );
};

module.exports = {
  createOrUpateCart,
  deleteFromCart,
};
