-- ADDITIONAL QUERIES
-- Get meals that has a price smaller than a specific price fx 90
SELECT meal.id AS 'Meal ID', meal.title AS 'Meal Name', meal.price AS 'Price'
FROM meal
WHERE meal.price < 200; 

-- Get meals that still has available reservations
SELECT meal.id AS 'Meal ID', meal.title AS 'Meal Name', meal.meal_date_time AS 'Meal Date and Time'
FROM meal
WHERE NOT EXISTS (
SELECT * FROM reservation
WHERE meal.id = reservation.meal_id);

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT meal.id AS 'Meal ID', meal.title AS 'Meal Name'
FROM meal
WHERE title like '%Indian%';

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date between '2023-01-10' and '2023-01-20';

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT 5;

-- Get the meals that have good reviews
SELECT meal.id AS 'Meal ID', meal.title AS 'Meal Name', review.title AS 'Review Title', review.description AS 'Review', review.stars AS 'Stars'
FROM meal
INNER JOIN review
ON meal.id = review.meal_id
WHERE review.stars >= 3;
	-- Do we need to create a seperate table stars with column star.id and star.name (Bad, Average, Good, Very Good, Excellent)

-- Get reservations for a specific meal sorted by created_date
SELECT meal.id AS 'Meal ID', meal.title AS 'Meal Name', reservation.id AS 'Reservation ID', reservation.number_of_guests AS 'Number of Guests', reservation.created_date AS 'Reserved On'
FROM reservation
INNER JOIN meal
ON reservation.meal_id = meal.id
WHERE meal.id = 2 
ORDER BY reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, ROUND( AVG(review.stars),1 ) AS 'Average Rating'
FROM meal
INNER JOIN review
ON meal.id = review.meal_id
GROUP BY review.meal_id
ORDER BY avg (review.stars) DESC;
