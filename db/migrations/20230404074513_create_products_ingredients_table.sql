-- migrate:up
CREATE TABLE products_ingredients (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  ingredient_id INT NOT NULL,
  CONSTRAINT pingred_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
  CONSTRAINT pingred_ingred_id_fkey FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
)
-- migrate:down

