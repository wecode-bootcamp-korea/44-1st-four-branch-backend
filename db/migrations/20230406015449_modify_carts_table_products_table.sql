-- migrate:up
ALTER TABLE carts 
ADD CONSTRAINT carts_unique_pair_user_product 
UNIQUE (user_id, product_id);


ALTER TABLE products 
ADD summary VARCHAR(100);

-- migrate:down

