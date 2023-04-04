-- migrate:up
CREATE TABLE ingredients (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
)

-- migrate:down

