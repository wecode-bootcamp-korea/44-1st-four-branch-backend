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

const deleteFromCart = async (cartId, userId) => {
  return await appDataSource.query(
    `DELETE FROM carts
    WHERE user_id = ? AND id IN (?)`,
    [userId, cartId]
  );
};

const getCart = async (userId) => {
  return await appDataSource.query(
    `SELECT
    c.id cartId,
    p.id productId,
    p.name,
    p.price*c.quantity totalPriceByP,
    s.size,
    c.quantity
    FROM carts c
    JOIN products p ON p.id = c.product_id
    JOIN sizes s ON p.size_id = s.id
    WHERE user_id = ?`,
    [userId]
  );
};

const changeQuantity = async (cartId, quantity, userId) => {
  return await appDataSource.query(
    `UPDATE carts
    SET quantity = ?
    WHERE id = ? AND user_id = ?`,
    [quantity, cartId, userId]
  );
};

module.exports = {
  createOrUpateCart,
  deleteFromCart,
  getCart,
  changeQuantity,
};
