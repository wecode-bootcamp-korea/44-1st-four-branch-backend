const appDataSource = require('./appDataSource');

const getProductsBySubCategory = async (subCategory) => {
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
        WHERE sc.id = ?`,
      [subCategory]
    );
  } catch (err) {
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

const getProductsByMainCategory = async (mainCategory) => {
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
        WHERE m.id = ?`,
      [mainCategory]
    );
  } catch (err) {
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

const getProductById = async (productId) => {
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
          WHERE p.id = ?`,
      [productId]
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
        ) joined_ig ON joined_ig.pid = p.id`
    );
  } catch (err) {
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  getProductsBySubCategory,
  getProductsByMainCategory,
  getProductById,
  getAllProducts,
};
