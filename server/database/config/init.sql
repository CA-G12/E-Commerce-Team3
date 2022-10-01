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
('mens clothing', 'mens clothing'),
('jewelry', 'jewelry'),
('electronics', 'electronics'),
('womens clothing', 'womens clothing'),
('shoes', 'shoes');


INSERT INTO products (title, description, price, image, category_id)
VALUES 

('half sleeves T shirts', 
'Brand: vintage Apparel ,Export quality',
25.5,
'https://dummyjson.com/image/i/products/53/2.jpg',
1),
('Nike Air Force 1', 
'Brand: vintage Apparel ,Export quality',
50,
'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_383,c_limit/zjrheo7cjgrv6opt8txu/air-force-1-07-wb-shoe-QLs4Hz.png',
7),

('printed high quality T shirts', 
'Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands',
23,
'https://dummyjson.com/image/i/products/51/1.png',
1),
('Money Heist T Shirts', 
'Fabric Jercy, Size: M & L Wear Stylish Dual Stiched',
30,
'https://dummyjson.com/image/i/products/55/1.jpg',
1),

('Womens Air Jordan 1', 
'Brand: vintage Apparel ,Export quality',
40,
'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_383,c_limit/e24cc9da-a136-4262-987d-ab1a435cade1/air-jordan-1-retro-high-og-shoes.png',
7),


-- //--------------------------------------
('Fjallraven - Foldsack', 
'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
109.95,
'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
1),

('Mens Casual Premium', 
'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
22.3,
'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
1),

('Nike Air Force', 
'Brand: vintage Apparel ,Export quality',
54,
'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_383,c_limit/0d77f14f-6c0b-470c-b23f-7e3e4428e92d/air-jordan-1-low-shoes-pbb97R.png',
7),

('Mens Cotton Jacket', 
'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
55.99,
'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
1),

('Mens Casual Slim Fit', 
'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
15.99,
'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
1),

('Nike Air Zoom Alphafly', 
'Brand: vintage Apparel ,Export quality',
70,
'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_383,c_limit/b6e11cbd-509d-483d-b21d-850e2d7924ca/air-zoom-alphafly-next-2-road-racing-shoes-jmPrD5.png',
7),

('John Hardy Women Legends', 
'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.',
69,
'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
4),

('Solid Gold Petite Micropave', 
'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
168,
'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
5),

('WD 2TB Elements Portable', 
'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
64,
'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
6),

('Silicon Power 256GB SSD 3D', 
'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
109,
'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
6),

('BIYLACLESEN Womens', 
'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
56.99,
'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
1),

('jeans Womens', 
'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
56.99,
'https://s7d2.scene7.com/is/image/aeo/0437_3948_905_f?$cat-main_large$&fmt=webp',
2),

('blue jans Womens', 
'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
50.88,
'https://s7d2.scene7.com/is/image/aeo/3437_4128_404_f?$cat-main_large$&fmt=webp',
2),

('black jeansWomens', 
'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
40,
'https://s7d2.scene7.com/is/image/aeo/1325_4781_448_f?$cat-main_large$&fmt=webp',
2),

('ASOS DESIGN Tasha espadrille', 
'Brand: vintage Apparel ,Export quality',
40,
'https://images.asos-media.com/products/asos-design-tasha-espadrille-wedges-in-white/201116952-1-white?$n_320w$&wid=317&fit=constrain',
7),

(' Wide Fit Ember high', 
'Brand: vintage Apparel ,Export quality',
76,
'https://images.asos-media.com/products/asos-design-wide-fit-ember-high-heeled-sock-boots-in-off-white/202926983-1-offwhitepatent?$n_320w$&wid=317&fit=constrain',
7),

('ASOS DESIGN Wide Fit ', 
'Brand: vintage Apparel ,Export quality',
80,
'https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-beige/201083208-1-beigepatent?$n_320w$&wid=317&fit=constrain',
7),

('barely there block heeled', 
'Brand: vintage Apparel ,Export quality',
37,
'https://images.asos-media.com/products/asos-design-wide-fit-nora-barely-there-block-heeled-sandals-in-black/200440088-1-blackmicro?$n_320w$&wid=317&fit=constrain',
7),

('Glamorous Wide Fit mid', 
'Brand: vintage Apparel ,Export quality',
26,
'https://images.asos-media.com/products/glamorous-wide-fit-mid-heel-sandals-in-camel/201578659-1-camel?$n_320w$&wid=317&fit=constrain',
7),

('Lock and Love Womens', 
'100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
29.95,
'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
1);






INSERT INTO users (name, email, password, avatar) VALUES
('Test', 'test@hotmail.com' ,'12345678', NULL),
('Yazeed', 'yazeed@hotmail.com' ,'123', NULL),
('Saeed', 'saeed@hotmail.com' ,'123', NULL);

INSERT INTO cart (user_id, product_id, count) VALUES
(1, 1, 5),
(1, 2, 3),
(2, 2, 3);

COMMIT;
