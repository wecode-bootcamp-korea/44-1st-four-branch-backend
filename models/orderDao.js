const appDataSource = require('./appDataSource');

const payByPoint = async (orderNumber, userId) => {
  try {
    await appDataSource.query(
      ` UPDATE users u
        JOIN orders o ON o.user_id = u.id
        SET u.point = (u.point - o.total_price)
        WHERE o.number = ? AND o.user_id = ?`,
      [orderNumber, userId]
    );
  } catch (err) {
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  payByPoint,
};
