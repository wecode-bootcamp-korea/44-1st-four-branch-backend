-- migrate:up
CREATE TABLE sizes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  size VARCHAR(50) NOT NULL
)

-- migrate:down

