const appdataSource = require('./appDataSource');

const searchProduct = async (keyword) => {
  try {
    return appdataSource.query(
      `SELECT 
      products.id,
      products.name,
      images.url
      FROM products 
      JOIN products_images ON products.id = products_images.product_id 
      JOIN images ON products_images.image_id = images.id
      WHERE name LIKE '%${keyword}%'
      `
    );
  } catch (err) {
    err.message = 'INVALID_DATA';
    err.statusCode = 500;
    throw error;
  }
};

module.exports = {
  searchProduct,
};
