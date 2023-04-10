const appDataSource = require('./appDataSource');

//transaction 적용
const payByPoint = async (orderNumber, userId) => {
  const queryRunner = appDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    await queryRunner.query(
      ` UPDATE users u
        JOIN orders o ON o.user_id = u.id
        SET u.point = (u.point - o.total_price)
        WHERE o.number = ? AND o.user_id = ?`,
      [orderNumber, userId]
    );
    await queryRunner.query(
      `UPDATE orders o
      JOIN users u ON o.user_id = u.id
      SET o.status_id = 2
      WHERE o.number = ? AND u.id = ?`,
      [orderNumber, userId]
    );

    await queryRunner.query(
      `DELETE FROM carts
      WHERE user_id = ?`,
      [userId]
    );
    await queryRunner.commitTransaction();
    return;
  } catch (err) {
    await queryRunner.rollbackTransaction();
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  payByPoint,
};
