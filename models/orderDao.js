const appdataSource = require('./appDataSource');

const payByPoint = async (orderNumber) => {
  try {
    await appdataSource.query(
      ` UPDATE users u
        JOIN orders o ON o.user_id = u.id
        SET u.point = u.point - o.total_price
        WHERE o.number = ?`,
      [orderNumber]
    );
  } catch (err) {}
};

module.exports = {
  payByPoint,
};
