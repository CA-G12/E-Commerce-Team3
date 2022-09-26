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

INSERT INTO categories (name, description)
VALUES 
('T-Shirts', 'T-Shirts'),
('Jeans', 'Jeans'),
('Shoes', 'Shoes');


INSERT INTO products (title, description, price, image, category_id)
VALUES 

('half sleeves T shirts', 
'Brand: vintage Apparel ,Export quality',
25.5,
'https://dummyjson.com/image/i/products/53/2.jpg',
1),

('printed high quality T shirts', 
'Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands',
23,
'https://dummyjson.com/image/i/products/51/1.png',
2),
('Money Heist Printed Summer T Shirts', 
'Fabric Jercy, Size: M & L Wear Stylish Dual Stiched',
30,
'https://dummyjson.com/image/i/products/55/1.jpg',
1);







INSERT INTO users (name, email, password, avatar) VALUES
('Test', 'test@hotmail.com' ,'123', NULL),
('Yazeed', 'yazeed@hotmail.com' ,'123', NULL),
('Saeed', 'saeed@hotmail.com' ,'123', NULL);

INSERT INTO cart (user_id, product_id, count) VALUES
(1, 1, 5),
(1, 2, 3),
(2, 2, 3);

COMMIT;
