-- migrate:up
CREATE TABLE product_ingredient {
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  ingred_id INT NOT NULL,
  CONSTRAINT pingred_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
  CONSTRAINT pingred_ingred_id_fkey FOREIGN KEY (ingred_id) REFERENCES ingredients(id)
}
-- migrate:down

