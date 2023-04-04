-- migrate:up
CREATE TABLE sub_categories {
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  main_category_id INT NOT NULL,
  CONSTRAINT sub_categories_main_cat_id_fkey FOREIGN KEY (main_categories_id) REFERENCES main_categories(id)
}

-- migrate:down

