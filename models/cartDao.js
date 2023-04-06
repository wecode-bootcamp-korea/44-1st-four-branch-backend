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

module.exports = {
  addToCart,
  deleteFromCart,
  checkIfFirst,
  plusItemCount,
};
