-- migrate:up
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price DECIMAL(8,2) NOT NULL,
  description TEXT,
  size_id INT NOT NULL,
  sub_category_id INT NOT NULL,
  main_product BOOLEAN,
  CONSTRAINT products_size_id_fkey FOREIGN KEY (size_id) REFERENCES sizes(id),
  CONSTRAINT products_sub_categoty_id_fkey FOREIGN KEY (sub_category_id) REFERENCES sub_categories(id)
)

-- migrate:down