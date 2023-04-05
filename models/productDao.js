const appDataSource = require('./appDataSource');

const getProductsByCondition = async (subId, mainId, pId, isMain) => {
  try {
    let condition = '';
    if (subId) {
      condition = `WHERE sc.id = ${subId}`;
    } else if (mainId) {
      condition = `WHERE m.id = ${mainId}`;
    } else if (pId) {
      condition = `WHERE p.id = ${pId}`;
    } else if (isMain) {
      condition = `WHERE p.main_product = ${isMain}`;
    }

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
        m.name mainCategoryName,
        i.url imageUrl,
        joined_ig.ig_array ingredients
    FROM products p
    JOIN sizes s ON p.size_id = s.id
    JOIN sub_categories sc ON sc.id = p.sub_category_id
    JOIN main_categories m ON sc.main_category_id = m.id
    JOIN products_images pi ON p.id = pi.product_id
    JOIN images i ON i.id = pi.image_id
    JOIN (
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
  getProductsByCondition,
};
