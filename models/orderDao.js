const appDataSource = require('./appDataSource');

const orderInfo = async (userid, totalprice, number, statusid, addressid) => {
  try {
    return await appDataSource.query(
      `INSERT INTO orders(
        user_id,
        total_price,
        number,
        status_id,
        address_id
        ) VALUES (?, ?, ?, ?, ?)
        `,
      [userid, totalprice, number, statusid, addressid]
    );
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  orderInfo,
};
