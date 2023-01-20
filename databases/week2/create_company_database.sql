DROP DATABASE IF EXISTS `company_database`;

-- Create a new database containing the following tables:
CREATE DATABASE IF NOT EXISTS `company_database`;

USE `company_database`;

-- table: employee;
-- columns: id, first_name, last_name, date_of_birth, contact_number;
CREATE TABLE IF NOT EXISTS `employee` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`date_of_birth` DATETIME NOT NULL,
	`contact_number` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- table: address_code;
-- columns: id, post_code, city, country;
CREATE TABLE IF NOT EXISTS `address_code` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`post_code` int(10) unsigned NOT NULL,
	`city` varchar(255) NOT NULL,
	`country` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- table: address;
-- columns: id, street_name, address_code_id;
CREATE TABLE IF NOT EXISTS `address` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`street_name` varchar(255) NOT NULL,
	`address_code_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_address_address_code` FOREIGN KEY (`address_code_id`) REFERENCES `address_code` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- table: employee_address;
-- columns: employee_id, address_id;
CREATE TABLE IF NOT EXISTS `employee_address` (
	`employee_id` int(10) unsigned NOT NULL,
	`address_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`employee_id`, `address_id`),
  CONSTRAINT `fk_employee_address_employee` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_employee_address_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- table: department;
-- columns: id, name;
CREATE TABLE IF NOT EXISTS `department` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	 PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

  
-- table: designation;
-- columns: id, name;
CREATE TABLE IF NOT EXISTS `designation` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	 PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

  
-- table: location;
-- columns: id, street_name, address_code_id;
CREATE TABLE IF NOT EXISTS `location` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`street_name` varchar(255) NOT NULL,
	`address_code_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_location_address_code` FOREIGN KEY (`address_code_id`) REFERENCES `address_code` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 

-- Join tables location and address_code
-- table: location_address;
-- columns: location_id, address_id;
CREATE TABLE IF NOT EXISTS `location_address` (
	`location_id` int(10) unsigned NOT NULL,
	`address_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`location_id`, `address_id`),
  CONSTRAINT `fk_location_address_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_location_address_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 

-- table: employee_company_data;
-- columns: employee_id, department_id, designation_id, office_code;
CREATE TABLE IF NOT EXISTS `employee_company_data` (
	`id` int(10) unsigned NOT NULL,
    `employee_id` int(10) unsigned NOT NULL,
	`department_id` int(10) unsigned NOT NULL,
    `designation_id` varchar(255) NOT NULL,
    `location_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`id`),
  CONSTRAINT `fk_employee_company_data_employee` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_employee_company_data_department` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_employee_company_data_designation` FOREIGN KEY (`designation_id`) REFERENCES `designation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_employee_company_data_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  

  
  