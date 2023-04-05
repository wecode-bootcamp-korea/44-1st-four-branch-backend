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
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

const getAllProducts = async () => {
  try {
    return await appDataSource.query(
      `SELECT 
        p.id,
        p.name,
        p.price,
        p.description,
        p.size_id sizeId,
        p.sub_category_id subCategoryId,
        s.size size,
        sc.name subCategoryName,
        m.id mainCategoryId,
        m.name mainCategoryName
        FROM products p
        JOIN sizes s ON p.size_id = s.id
        JOIN sub_categories sc ON sc.id = p.sub_category_id
        JOIN main_categories m ON sc.main_category_id = m.id`
    );
  } catch (err) {
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  getProductsBySubCategory,
  getAllProducts,
};
