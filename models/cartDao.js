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

const checkIfFirst = async (productId, userId) => {
  const [result] = await appDataSource.query(
    `SELECT NOT EXISTS(
      SELECT
        id
      FROM carts
      WHERE product_id = ? AND user_id =?
    ) checking`,
    [productId, userId]
  );
  return !!parseInt(result.checking);
};

const plusItemCount = async (productId, userId) => {
  return await appDataSource.query(
    `UPDATE carts
    SET quantity = quantity + 1
    WHERE product_id = ? AND user_id =?`,
    [productId, userId]
  );
};

const getCart = async (userId) => {
  return await appDataSource.query(
    `SELECT
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

const changeQuantity = async (productId, quantity, userId) => {
  return await appDataSource.query(
    `UPDATE carts
    SET quantity = ?
    WHERE product_id = ? AND user_id = ?`,
    [quantity, productId, userId]
  );
};

module.exports = {
  addToCart,
  deleteFromCart,
  checkIfFirst,
  plusItemCount,
  getCart,
  changeQuantity,
};
