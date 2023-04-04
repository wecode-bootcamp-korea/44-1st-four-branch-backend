-- migrate:up
CREATE TABLE products_images {
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  image_id INT NOT NULL,
  CONSTRAINT pi_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
  CONSTRAINT pi_image_id_fkey FOREIGN KEY (image_id) REFERENCES images(id)
}

-- migrate:down

