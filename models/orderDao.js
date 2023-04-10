const appDataSource = require('./appDataSource');
const { v4: uuid } = require('uuid');

const createOrder = async (userId, totalPrice) => {
  try {
    const orderNum = uuid();
    return await appDataSource.query(
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
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

const orderItems = async (userId) => {
  try {
    return await appDataSource.query(
      `INSERT INTO order_items(
        order_id ,
        product_id ,
        quantity ,
        status_id
        )
        SELECT orders.id, carts.product_id, carts.quantity , orders.status_id
        FROM orders
        JOIN carts ON carts.user_id = orders.user_id
        WHERE orders.user_id = ? AND orders.status_id = 1
      `,
      [userId]
    );
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

const orderInfo = async (userId) => {
  try {
    return await appDataSource.query(
      `SELECT
      orders.number as orderNumber,
      orders.updated_at as orderDate,
      JSON_OBJECT('country', addresses.country, 'postcode', addresses.postcode, 'detail', addresses.detail) as address,
      products.name as productName,
      sizes.size as size,
      products.price price,
      orders.total_price totalPrice
      FROM orders
      JOIN order_items ON orders.id = order_items.order_id
      JOIN products ON order_items.product_id = products.id
      JOIN addresses ON orders.user_id = addresses.user_id
      JOIN sizes ON products.size_id = sizes.id
      WHERE orders.user_id = ?
      `,
      [userId]
    );
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  createOrder,
  orderItems,
  orderInfo,
};

// 결제하는거에서 orders를 겟하는 다오를 만들건데......
// orders인투, 셀렉트 오더스 하는걸,
// 유저

// const orderInfo = async (userId, totalPrice, statusId, addressId) => {
//   try {
//     const orderNum = uuid();
//     return await appDataSource.query(
//       `INSERT INTO orders(
//         user_id,
//         total_price,
//         number,
//         status_id,
//         address_id
//         ) VALUES (?, ?, ?, ?, ?)
//         `,
//       [userId, totalPrice, orderNum, statusId, addressId]
//     );
//   } catch (err) {
//     err.message = 'INVALID DATA';
//     err.statusCode = 400;
//     throw err;
//   }
// };
