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
('Shoes', 'Shoes'),
('mens clothing', 'mens clothing'),
('jewelery', 'jewelery'),
('electronics', 'electronics'),
('womens clothing', 'womens clothing');


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
1),


-- //--------------------------------------
('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 
'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
109.95,
'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
4),

('Mens Casual Premium Slim Fit T-Shirts', 
'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
22.3,
'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
4),

('Mens Cotton Jacket', 
'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
55.99,
'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
4),

('Mens Casual Slim Fit', 
'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
15.99,
'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
4),

('John Hardy Women Legends Naga Gold & Silver Dragon Station Chain Bracelet', 
'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.',
695,
'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
4),

('Solid Gold Petite Micropave', 
'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
168,
'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
5),

('WD 2TB Elements Portable External Hard Drive - USB 3.0', 
'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
64,
'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
6),

('Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', 
'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
109,
'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
6),

('BIYLACLESEN Womens 3-in-1 Snowboard Jacket Winter Coats', 
'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
56.99,
'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
7),

('Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket', 
'100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
29.95,
'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
7);






INSERT INTO users (name, email, password, avatar) VALUES
('Test', 'test@hotmail.com' ,'123', NULL),
('Yazeed', 'yazeed@hotmail.com' ,'123', NULL),
('Saeed', 'saeed@hotmail.com' ,'123', NULL);

INSERT INTO cart (user_id, product_id, count) VALUES
(1, 1, 5),
(1, 2, 3),
(2, 2, 3);

COMMIT;
