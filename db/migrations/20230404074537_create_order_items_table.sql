-- migrate:up
CREATE TABLE order_items (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  status_id INT NOT NULL,
  CONSTRAINT oitems_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders(id),
  CONSTRAINT oitems_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
  CONSTRAINT oitems_status_id_fkey FOREIGN KEY (status_id) REFERENCES order_statuses(id)
)

-- migrate:down

