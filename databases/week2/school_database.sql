-- DROP DATABASE IF EXISTS `lesson2_homework_school_database`;
-- SHOW DATABASES;

-- Create a new database containing the following tables:
CREATE DATABASE IF NOT EXISTS `lesson2_homework_school_database`;

USE `lesson2_homework_school_database`;

-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE IF NOT EXISTS `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `begins` DATE NOT NULL,
  `ends` DATE NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone` varchar(15) NULL,
  `class_id` int(10) unsigned NOT NULL,  
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
	-- The CREATE INDEX statement is used to create indexes in tables.
	-- Indexes are used to retrieve data from the database more quickly than otherwise. 
	-- The users cannot see the indexes, they are just used to speed up searches/queries.
CREATE INDEX index_name
ON student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;

-- student
insert into student (id, name, email, phone, class_id) values (1, 'Hanna Hussein', 'hdahj@outlook.com', 95231245 , 22);
insert into student (id, name, email, phone, class_id) values (2, 'Manisha Patel', 'mdjkhj@gmail.com', 65427894 , 22);
insert into student (id, name, email, phone, class_id) values (3, 'Prakashkumar Patel', 'pehdahj@gmail.com', 87512654 , 22);
insert into student (id, name, email, phone, class_id) values (4, 'Aditi Sawardekar', 'aghj@gmail.com', 12345678 , 23);
insert into student (id, name, email, phone, class_id) values (5, 'Alaa Abdelbaki', 'ageuei@gmail.com', 54657894 , 23);
insert into student (id, name, email, phone, class_id) values (6, 'Alexander Sudarikov', 'ehyue@gmail.com', 45654879 , 23);
insert into student (id, name, email, phone, class_id) values (7, 'Madhumita D', 'maghj@gmail.com', 87123456 , 23);
insert into student (id, name, email, phone, class_id) values (8, 'Mehmet C', 'mgdhj@gmail.com', 578853456 , 23);
insert into student (id, name, email, phone, class_id) values (9, 'Shobana Kumari Mathiarul', 'mdjkfhj@gmail.com', 45453578 , 23);
insert into student (id, name, email, phone, class_id) values (10, 'Hiral', 'hdjkj@gmail.com', 56547894 , 24);
insert into student (id, name, email, phone, class_id) values (11, 'Ann', 'aklfh@gmail.com', 23451265 , 24);
insert into student (id, name, email, phone, class_id) values (12, 'John', 'jkdlf@gmail.com', 65427895 , 24);

-- class
insert into class (id, name, begins, ends, status) values (22 , 'Class 22', '2022-04-24 12:00:00', '2023-01-14 16:00:00', 'finished');
insert into class (id, name, begins, ends, status) values (23 , 'Class 23', '2022-09-18 12:00:00', '2023-05-28 16:00:00', 'ongoing');
insert into class (id, name, begins, ends, status) values (24 , 'Class 24', '2022-10-23 12:00:00', '2022-07-02 16:00:00', 'ongoing');
insert into class (id, name, begins, ends, status) values (25 , 'Class 25', '2023-01-28 12:00:00', '2023-10-15 16:00:00', 'not-started');
