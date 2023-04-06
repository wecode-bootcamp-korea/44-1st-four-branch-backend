const appDataSource = require('./appDataSource');

const orderInfo = async (userid, totalprice, number, statusid, addressid) => {
  try {
    const result = await appDataSource.query(
      `INSERT INTO orders
        userid,
        totalprice,
        number,
        statusid,
        addressid
        VALUES (?, ?, ?, ?, ?)
        `,
      [userid, totalprice, number, statusid, addressid]
    );
    return result;
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  orderInfo,
};
