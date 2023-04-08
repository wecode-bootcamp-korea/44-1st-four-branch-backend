const appDataSource = require('./appDataSource');
const { v4: uuid } = require('uuid');

const orderInfo = async (userId, totalPrice) => {
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
        `,
      [userId, totalPrice, orderNum, userId]
    );
  } catch (err) {
    console.log(userId);
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
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
