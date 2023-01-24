-- DROP DATABASE IF EXISTS `meal_sharing`;

-- SHOW DATABASES;

-- Create a new database containing the following tables:
CREATE DATABASE IF NOT EXISTS `meal_sharing`;

USE `meal_sharing`;

-- table: Meal;
-- columns: id, title, description, location, when, max_reservations, price, created_date;
CREATE TABLE IF NOT EXISTS `meal` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`description` TEXT NULL DEFAULT NULL,
	`location` VARCHAR(255) NOT NULL,
	`meal_date_time` DATETIME NOT NULL, -- Changed column name from when to meal_date_time
	`max_reservations` INT(2) NOT NULL,
	`price` DECIMAL(5,2) NOT NULL,
	`created_date` DATE NOT NULL,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

-- table: Review;
-- columns: id, title, description, meal_id (foreign key),starts, created_date;
CREATE TABLE IF NOT EXISTS `review` (
	`id` INT(10) unsigned NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`description` TEXT NULL DEFAULT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
	`stars` INT(2) NOT NULL,
	`created_date` DATE NOT NULL,
	PRIMARY KEY (`id`),
CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES meal (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- table: Reservation;
-- columns: id, number_of_guests, meal_id (foreign key), created_date, contact_phonenumber, contact_name, contact_email ;
CREATE TABLE IF NOT EXISTS `reservation` (
	`id` INT(10) unsigned NOT NULL,
	`number_of_guests` INT(2) UNSIGNED NOT NULL,
	`meal_id` INT(10) UNSIGNED NOT NULL,
	`created_date` DATE NOT NULL,
	`contact_phonenumber` VARCHAR(15) NOT NULL,
    `contact_name` VARCHAR(60) NOT NULL,
	`contact_email` VARCHAR(60) NOT NULL,
	PRIMARY KEY (`id`),
CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


