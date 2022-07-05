
INSERT INTO users (user_name, email, password)
VALUES
  ('test', 'test@test.com', 'test'),
  ('Nhan Tran','nhan@nhan.com','nhan'),
  ('Hongseoup Yun','hongseoup@hongseoup.com','hongseoup'),
  ('Harsimran','harsimran@harsimran.com','harsimran'),
  ('Harper Myers','erat.eget@yahoo.edu','Cnz7'),
  ('Yara Frank','sem@hotmail.edu','Hlz2');


INSERT INTO listings (user_id, name, description, brand, size, image_url, preference, active)
VALUES

  -- (5,'4 Dunks','New and shiny wore once', 'Air Jordan',9, 'https://i.pinimg.com/originals/b4/ca/da/b4cada00cf84eb64d24da8391b8507e2.jpg' , 'Yeezy', TRUE),

  (2,'Sushi Shoe','Wear it or eat it, Gently used', 'New Balance',9, 'https://cdn4.dogonews.com/images/cc492c12-6072-4ed0-a94c-1979b8a654a2/tl-horizontal_main.jpg' , 'Jordans and Dunks', TRUE);

  -- (5,'Salmon Vans','Unwore and uncooked', 'New Balance',9, 'https://www.geo.tv/assets/uploads/updates/2017-05-13/l_141642_024301_updates.JPG' , 'Some other sushiShoes', TRUE),

  -- (5,'Adirice','Brand new, never digested ', 'New Balance',9, 'https://www.thisiscolossal.com/wp-content/uploads/2017/05/YujiaHu_08.jpg' , 'It better be delicious', TRUE),

  -- (2,'Boost 350','blue and clean', 'Adidas Yeezy',9, 'https://www.highsnobiety.com/static-assets/thumbor/896vVGfPtU7VjRV9Tyrp1acozsI=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2022/03/02144524/11.jpg', 'Vans preferred', TRUE),

  -- (2, 'Air Force Blue', 'Oldish but clean' ,'Air Force', 11 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkUu02u2qc0KxAmgoUS_0iCZdf3va313nYzeg-LDoJlR0vmb4_VQ0EfxA0jN67akKMVE&usqp=CAU', 'Another Air Force', TRUE);

-- INSERT INTO offers (listing_offer_made_to_id, listing_being_offered_id, complete, pending)
-- VALUES
--   (1,2, TRUE, FALSE),
--   (3,4, FALSE, TRUE),
--   (3,6, FALSE, TRUE);









-- INSERT INTO users (user_name, email, password)
-- VALUES
--   ('test', 'test@test.com', 'test'),
--   ('Nhan Tran','nhan@nhan.com','nhan'),
--   ('Hongseoup Yun','hongseoup@hongseoup.com','hongseoup'),
--   ('Harsimran','harsimran@harsimran.com','harsimran'),
--   ('Harper Myers','erat.eget@yahoo.edu','Cnz7'),
--   ('Yara Frank','sem@hotmail.edu','Hlz2');


-- INSERT INTO listings (user_id, name, description, brand, size, image_url, preference, active)
-- VALUES
--   (1,'Test shoes 1','test', 'vans', 4 , 'https://i.imgur.com/5zSnioJb.jpg' , 'some other fancy shoes pls', FALSE),
--   (2,'Test shoes 2','nhan', 'adidas yeezy', 5 , 'https://i.imgur.com/iqKDft8b.jpg', 'some other fancy shoes pls', FALSE),
--   (3,'New balances 990 Grey','New balnce 990 Grey color, Gently used', 'new balance',9, 'https://i.pinimg.com/originals/c3/c7/84/c3c7844c9e8b1990753809a5f8c99943.jpg' , 'Jordans and Dunks', TRUE),
--   (3,'New balances 990 Grey','New balnce 990 Grey color, Gently used', 'new balance',9, 'https://i.pinimg.com/originals/c3/c7/84/c3c7844c9e8b1990753809a5f8c99943.jpg' , 'Jordans and Dunks', TRUE),
--   (4,'Test shoes 2','harsimran', 'nike air force', 7 , 'https://i.imgur.com/ISBvrFJb.jpg', 'some other fancy shoes pls', TRUE),
--   (2,'Test shoes 2','Cnz7', 'nike dunks', 8 , 'https://i.imgur.com/Vquj6Jhb.jpg', 'some other fancy shoes pls', TRUE),
--   (1,'Test shoes 2','test','adidas yeezy', 10 , 'https://i.imgur.com/rg7Ghb.jpg',  'some other fancy shoes pls', TRUE),
--   (2,'Test shoes 2','nhan', 'others', 11 , 'https://i.imgur.com/OVhQ3hlb.jpg', 'some other fancy shoes pls', TRUE),
--   (4,'Test shoes 2','harsimran', 'air jordan', 10 , 'https://i.imgur.com/H5pMsuXb.jpg', 'some other fancy shoes pls', TRUE),
--   (2,'Test shoes 2','Cnz7', 'others', 11 , 'https://i.imgur.com/9k8MWCfb.jpg', 'some other fancy shoes pls', TRUE);

-- INSERT INTO offers (listing_offer_made_to_id, listing_being_offered_id, complete, pending)
-- VALUES
--   (1,2, TRUE, FALSE),
--   (3,4, FALSE, TRUE),
--   (3,6, FALSE, TRUE),
--   (3,9, FALSE, TRUE),
--   (3,7, FALSE, TRUE),
--   (5,6, FALSE, TRUE),
--   (7,8, FALSE, TRUE);




