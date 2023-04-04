-- migrate:up
CREATE TABLE order_statuses{
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  status VARCHAR(50) NOT NULL
}
-- migrate:down

