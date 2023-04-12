const appDataSource = require('./appDataSource');
const orderStatus = require('./enum');

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

const createOrder = async (userId, totalPrice, orderNum) => {
  const queryRunner = appDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    await queryRunner.query(
      `INSERT INTO orders(
        user_id,
        total_price,
        number,
        address_id
        )
        SELECT ?, ?, ?, addresses.id
        FROM addresses
        WHERE user_id = ?
        ORDER BY id DESC LIMIT 1
        `,
      [userId, totalPrice, orderNum, userId]
    );
    await queryRunner.query(
      `INSERT INTO order_items(
        order_id,
        product_id,
        quantity,
        status_id
        )
        SELECT orders.id, carts.product_id, carts.quantity , orders.status_id
        FROM orders
        JOIN carts ON carts.user_id = orders.user_id
        WHERE orders.user_id = ? AND orders.status_id = ${orderStatus.결제대기}
      `,
      [userId]
    );
    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  } finally {
    queryRunner.release();
  }
};

const orderInfo = async (userId) => {
  try {
    return await appDataSource.query(
      `SELECT
      orders.number as orderNumber,
      orders.updated_at as orderDate,
      JSON_OBJECT('country',MAX(addresses.country),'postcode',MAX(addresses.postcode),'detail',MAX(addresses.detail)) as userAddress,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'productName', products.name,
          'quantity', order_items.quantity,
          'price', products.price,
          'size', sizes.size
        )
      ) as orderItems,
      order_statuses.status as orderStatus,
      orders.total_price as totalPrice,
      users.last_name as userLastName,
      users.first_name as userFirstName
    FROM orders
    JOIN order_items ON orders.id = order_items.order_id
    JOIN order_statuses ON orders.status_id = order_statuses.id
    JOIN products ON order_items.product_id = products.id
    JOIN addresses ON orders.user_id = addresses.user_id
    JOIN sizes ON products.size_id = sizes.id
    JOIN users ON users.id = orders.user_id
    WHERE orders.user_id = ?
    GROUP BY orders.id
    ORDER BY orders.id DESC LIMIT 1
      `,
      [userId]
    );
  } catch (err) {
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  payByPoint,
  createOrder,
  orderInfo,
};
