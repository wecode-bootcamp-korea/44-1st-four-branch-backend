const appdataSource = require('./appDataSource');
// const connection = require('typeorm');

const searchProduct = async (name) => {
  try {
    await appdataSource.query(
      `SELECT
      name
      FROM products
      WHERE name LIKE '%${name}%'
      `
    );
  } catch (err) {
    const error = new Error('INVALID_DATA');
    console.log(err);
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  searchProduct,
};
