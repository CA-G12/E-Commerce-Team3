BEGIN;

DROP TABLE IF EXISTS products, categories, users, cart CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  price decimal NOT NULL,
  image TEXT,
  category_id INT,
  CONSTRAINT product_category_fk FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255) NOT NULL,
  avatar VARCHAR(255)
);


CREATE TABLE cart (
  id SERIAL,
  user_id INT,
  product_id INT,
  count decimal NOT NULL DEFAULT 1,
  CONSTRAINT cart_user_fk FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT cart_product_fk FOREIGN KEY (product_id) REFERENCES products(id),
  PRIMARY KEY (user_id, product_id)
);

COMMIT;