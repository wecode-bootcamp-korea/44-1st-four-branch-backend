-- migrate:up
CREATE TABLE orders {
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  total_price DECIMAL(8,2) NOT NULL,
  number VARCHAR(500) NOT NULL,
  status_id INT NOT NULL,
  address_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT orders_status_id_fkey FOREIGN KEY (status_id) REFERENCES order_statuses(id),
  CONSTRAINT orders_address_id_fkey FOREIGN KEY (address_id) REFERENCES addresses(id)
}

-- migrate:down

