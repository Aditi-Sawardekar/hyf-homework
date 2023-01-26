USE `meal_sharing`;

-- MEAL
-- Get all meals
SELECT meal.id AS 'Meal Id', meal.title AS 'Meals'
FROM meal;
 
-- Add a new meal
insert into meal (title, description, location, meal_date_time, max_reservations, price, created_date) 
values ('Vegeterian Indian Menu', 'bnbghdjshkjhk dghsj sghg', 'Mumbai', '2023-01-15 19:00:00', 8, 150.00, '2023-01-05');

insert into meal (title, description, location, meal_date_time, max_reservations, price, created_date) 
values ('Non Vegeterian Indian Menu', 'Chicken Meal', 'Delhi', '2023-01-20 18:30:00', 10, 200.00, '2023-01-10');

insert into meal (title, description, location, meal_date_time, max_reservations, price, created_date) 
values ('Fish Meal', 'Fish Meal', 'Goa', '2023-01-22 18:30:00', 10, 220.00, '2023-01-11');

insert into meal (title, description, location, meal_date_time, max_reservations, price, created_date) 
values ('Danish Meal', 'sdhgjj', 'Copenhagen', '2023-01-24 18:30:00', 20, 250.00, '2023-01-14');

insert into meal (title, description, location, meal_date_time, max_reservations, price, created_date) 
values ('ABC Meal', 'poritoik', 'wrteus', '2023-01-24 18:00:00', 5, 220.00, '2023-01-14');

	-- Deleted later using query
insert into meal (title, description, location, meal_date_time, max_reservations, price, created_date) 
values ('XYZ Meal', 'kjfhjk', 'kdjkk', '2023-01-20 18:00:00', 2, 220.00, '2023-01-16');

insert into meal (title, description, location, meal_date_time, max_reservations, price, created_date) 
values ('Vegan Meal', 'fkjiero', 'oi4ow3d', '2023-01-25 18:15:00', 15, 180.00, '2023-01-20');

-- Get a meal with any id, fx 1
SELECT * 
FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
	-- Updated description for meal with id 1
UPDATE meal
SET description = REPLACE(description,'bnbghdjshkjhk dghsj sghg','Maharashtrian Vegeterian Meal')           
WHERE id = 1;
	
    
-- Delete a meal with any id, fx 1
	-- Deleted a task with id = 3 
DELETE FROM meal WHERE id= 6;

-- RESERVATION
-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (1, 3, 2, '2023-01-12', 12345678, 'Jenny', 'jenny.j@gmail.com');

insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (2, 2, 1, '2023-01-13', 65421234, 'Kim', 'kjhd.fgh@gmail.com');

insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (3, 1, 3, '2023-01-14', 35642157, 'Anu', 'ansj.kjd@gmail.com');

insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (4, 3, 2, '2023-01-15', 45452678, 'Mark', 'mkdg@gmail.com');

insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (5, 4, 5, '2023-01-20', 16548935, 'Unknown', 'uifgg@gmail.com');

insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (6, 2, 5, '2023-01-20', 36541258, 'JNB', 'hfjhfj@gmail.com');

-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
	-- Updating number_of_guests for Reservation id = 2 from 2 to 4;
UPDATE reservation
SET number_of_guests = REPLACE(number_of_guests,2, 4)           
WHERE id = 2;
	
   
-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id= 4;

-- REVIEW
-- Get all reviews
SELECT *
FROM review;

-- Add a new review
insert into review (id, title, description, meal_id, stars, created_date) 
values (1, 'Excellent Sea Food','Enjoyed fish meal made from fresh river water fish', 3 , 5, '2023-01-24');

insert into review (id, title, description, meal_id, stars, created_date) 
values (2, 'Chicken Meal','fhfdhkjhrf', 2 , 5, '2023-01-22');

insert into review (id, title, description, meal_id, stars, created_date) 
values (3, 'Not recommended','uiherihf', 5 , 1, '2023-01-25');

insert into review (id, title, description, meal_id, stars, created_date) 
values (4, 'Fish Food','ruieruhff', 3 , 3, '2023-01-25');

insert into review (id, title, description, meal_id, stars, created_date) 
values (5, 'Juicy Chicken','dkjfghk', 2 , 4, '2023-01-25');

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = REPLACE(title,'Excellent Sea Food', 'Excellent Fresh Fish Food')         
WHERE id = 1;
	
   
-- Delete a review with any id, fx 1
DELETE FROM review WHERE id= 2;