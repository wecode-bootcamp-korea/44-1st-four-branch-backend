-- migrate:up
ALTER TABLE orders
ALTER COLUMN status_id SET DEFAULT 1

-- migrate:down

