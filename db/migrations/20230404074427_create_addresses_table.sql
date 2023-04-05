-- migrate:up
CREATE TABLE addresses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  country VARCHAR(50) NOT NULL,
  postcode VARCHAR(50) NOT NULL,
  detail VARCHAR(200) NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT addresses_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)
)
-- migrate:down

