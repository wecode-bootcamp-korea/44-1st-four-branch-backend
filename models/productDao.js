const appDataSource = require('./appDataSource');

const searchProduct = async (keyword) => {
  try {
    return appDataSource.query(
      `SELECT 
      products.id,
      products.name,
      images.url
      FROM products 
      JOIN products_images ON products.id = products_images.product_id 
      JOIN images ON products_images.image_id = images.id
      WHERE products.name LIKE '%${keyword}%'
      `
    );
  } catch (err) {
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

const getProductsByCondition = async (subId, mainId, pId, isMain) => {
  try {
    const conditions = [
      subId && `WHERE sc.id = ${subId}`,
      mainId && `WHERE m.id = ${mainId}`,
      pId && `WHERE p.id = ${pId}`,
      isMain && `WHERE p.main_product = ${isMain}`,
    ].filter(Boolean);

    const condition = conditions[0] || '';

    return await appDataSource.query(
      `SELECT 
        p.id,
        p.name,
        p.price,
        p.description,
        p.summary,
        p.size_id sizeId,
        p.sub_category_id subCategoryId,
        s.size size,
        sc.name subCategoryName,
        m.id mainCategoryId,
        m.name mainCategoryName,
        i.url imageUrl,
        joined_ig.ig_array ingredients
    FROM products p
    LEFT JOIN sizes s ON p.size_id = s.id
    LEFT JOIN sub_categories sc ON sc.id = p.sub_category_id
    LEFT JOIN main_categories m ON sc.main_category_id = m.id
    LEFT JOIN products_images pi ON p.id = pi.product_id
    LEFT JOIN images i ON i.id = pi.image_id
    LEFT JOIN (
        SELECT
            pig.product_id pid,
            JSON_ARRAYAGG(ig.name) ig_array
        FROM ingredients ig
        JOIN products_ingredients pig ON pig.ingredient_id = ig.id
        GROUP BY pig.product_id
    ) joined_ig ON joined_ig.pid = p.id        
    ${condition}`
    );
  } catch (err) {
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  searchProduct,
  getProductsByCondition,
};
