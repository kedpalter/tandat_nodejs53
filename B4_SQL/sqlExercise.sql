-------------------------- CREATE TABLES --------------------------
CREATE TABLE `food` (
	`food_id` INT PRIMARY KEY AUTO_INCREMENT,
	`food_name` VARCHAR(255),
	`image` VARCHAR(255),
	`price` FLOAT,
	`desc` varchar(255),
	`type_id` INT,
	
	FOREIGN KEY (`type_id`) REFERENCES `food_type`(`type_id`)
);

CREATE table `sub_food` (
	`sub_id` INT PRIMARY KEY AUTO_INCREMENT,
	`sub_name` VARCHAR(255),
	`sub_price` FLOAT,
	`food_id` INT,
	
	FOREIGN KEY (`food_id`) REFERENCES `food`(`food_id`)
);

CREATE TABLE `food_type` (
	`type_id` INT PRIMARY KEY AUTO_INCREMENT,
	`type_name` VARCHAR(255)
);

CREATE TABLE `user` (
	`user_id` INT PRIMARY KEY AUTO_INCREMENT,
	`full_name` VARCHAR(255),
	`email` VARCHAR(255),
	`password` VARCHAR(255)
);

CREATE TABLE `order` (
	`user_id` INT,
	`food_id` INT,
	`amount` INT,
	`code` VARCHAR(255),
	`arr_sub_id` VARCHAR(255),
	
	PRIMARY KEY (`user_id`, `food_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`),
	FOREIGN KEY (`food_id`) REFERENCES `food`(`food_id`),
);

CREATE TABLE `rate_res` (
	`user_id` INT,
	`res_id` INT,
	`amount` INT,
	`date_rate` DATETIME,
	
	PRIMARY KEY (`user_id`,`res_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`),
	FOREIGN KEY (`res_id`) REFERENCES `restaurant`(`res_id`),
);

CREATE TABLE `like_res` (
	`user_id` INT,
	`res_id` INT,
	`date_like` DATETIME,
	
	PRIMARY KEY (`user_id`,`res_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`),
	FOREIGN KEY (`res_id`) REFERENCES `restaurant`(`res_id`),
);

CREATE TABLE `restaurant` (
	`res_id` INT PRIMARY KEY AUTO_INCREMENT,
	`res_name` VARCHAR(255),
	`image` VARCHAR(255),
	`desc` VARCHAR(255)
);
-------------------------- INSERT DATA --------------------------
INSERT INTO `food_type` (`type_name`) VALUES
						("Phở"),
						("Bún"),
						("Cơm"),
						("Mì"),
						("Ốc");
						
INSERT INTO `user`	(`full_name`) VALUES
					("Văn A"),
					("Văn B"),
					("Văn C"),
					("Văn D"),
					("Văn E"),
					("Văn F"),
					("Văn G"),
					("Văn H"),
					("Văn I"),
					("Văn J");
					
INSERT INTO `restaurant`(`res_name`) VALUES
						("Nhà hàng 1"),
						("Nhà hàng 2"),
						("Nhà hàng 3"),
						("Nhà hàng 4"),
						("Nhà hàng 5");
						
INSERT INTO `food`	(`food_name`, `type_id`) VALUES
					("Phở gà", 1),
					("Phở bò", 1),
					("Bún bò", 2),
					("Bún riêu", 2),
					("Cơm chiên dương châu", 3),
					("Cơm tấm", 3),
					("Mì xào hải sản", 4),
					("Mì vịt tiềm", 4),
					("Ốc len xào dừa", 5),
					("Ốc hương trứng muối", 5);
-------------------------- USER INTERACT --------------------------
INSERT INTO `order` (`user_id`, `food_id`,`amount`) VALUES
					(2, 3, 2),
					(1, 5, 2),
					(3, 9, 1),
					(4, 4, 1),
					(6, 7, 2),
					(7, 1, 3),
					(8, 6, 1),
					(9, 2, 1),
					(9, 3, 1);
					
INSERT INTO `like_res`	(`user_id`, `res_id`) VALUES
						(1, 2),
						(1, 3),
						(1, 4),
						(2, 2),
						(2, 5),
						(3, 1),
						(4, 5),
						(4, 1),
						(6, 4),
						(6, 2),
						(7, 3),
						(7, 5);
						
INSERT INTO `rate_res`	(`user_id`, `res_id`, `amount`) VALUES
						(4, 5, 4),
						(6, 1, 1),
						(7, 2, 5),
						(8, 3, 2),
						(9, 5, 3),
						(10, 5, 5);

----------------------------------------------------
------ 5 users with the most like -----
SELECT `user`.`user_id`, `full_name`, COUNT(`user`.`user_id`) AS "Likes" FROM `like_res`
INNER JOIN `user` ON `like_res`.`user_id` = `user`.`user_id`
GROUP BY `user`.`user_id`
ORDER BY `Likes` DESC
LIMIT 5;


----- 2 best restaurant -----
SELECT `restaurant`.`res_id`, `res_name`, COUNT(`restaurant`.`res_id`) AS "Top restaurants" FROM `like_res`
INNER JOIN `restaurant` ON `like_res`.`res_id` = `restaurant`.`res_id`
GROUP BY `restaurant`.`res_id`
ORDER BY `Top restaurants` DESC
LIMIT 2;


----- the most orders user -----
SELECT `user`.`user_id`, `full_name`, COUNT(`user`.`user_id`) AS "Order" FROM `order`
INNER JOIN `user` ON `order`.`user_id` = `user`.`user_id`
GROUP BY `user`.`user_id`
ORDER BY `Order` DESC
LIMIT 1;


----- inactive user -----
SELECT * FROM `user`
LEFT JOIN `order` ON `user`.`user_id` = `order`.`user_id`
LEFT JOIN `like_res` ON `user`.`user_id` = `like_res`.`user_id`
LEFT JOIN `rate_res` ON `user`.`user_id` = `rate_res`.`user_id`
WHERE `order`.`user_id` IS NULL AND `like_res`.`user_id` IS NULL AND `rate_res`.`user_id` IS NULL
