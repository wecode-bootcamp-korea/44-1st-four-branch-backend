const appDataSource = require('./appDataSource');

const getProductsBySubCategory = async (subCategory) => {
  try {
    return await appDataSource.query(
      `SELECT
        p.name,
        p.price,
        p.description,
        sc.name,
        s.size
      FROM products p
      JOIN sub_categories sc ON sc.id = p.sub_category_id
      JOIN sizes s ON s.id = p.size_id
      WHERE sc.id = ${subCategory}`
    );
  } catch (err) {
    err.message = 'DATASOURCE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  getProductsBySubCategory,
};
