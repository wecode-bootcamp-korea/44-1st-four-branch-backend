const appdataSource = require('./appDataSource');

const searchProduct = async (name) => {
  try {
    const result = await appdataSource.query(
      `SELECT
      id,
      name
      FROM products (
        SELECT 
          p.id,
          images.url,
          products_images.id
          FROM products p 
          JOIN products_images ON p.id = products_images.product_id 
          JOIN images ON products_images.product_id = images.id 
      )
      WHERE name LIKE '%${name}%'
      `
    );
    return result;
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
