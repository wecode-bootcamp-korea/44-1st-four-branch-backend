-- migrate:up
CREATE TABLE images {
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(1000) NOT NULL
}

-- migrate:down

