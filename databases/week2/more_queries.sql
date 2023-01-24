-- Databases lesson 2 More Queries
-- You should do these queries on the database hyf_lesson2
USE hyf_lesson2;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.id, task.title, user.name, user.email
FROM task
INNER JOIN user_task
ON task.id = user_task.task_id
INNER JOIN user
ON user_task.user_id = user.id
WHERE email like '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name, task.title, status.name as Status
FROM task
INNER JOIN user_task
ON task.id = user_task.task_id 
INNER JOIN status 
ON task.status_id = status.id
INNER JOIN user
ON user_task.user_id = user.id
WHERE user.name LIKE 'Donald Duck' AND status.name = "Not started";

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT title
FROM task
INNER JOIN user_task
ON task.id = user_task.task_id 
INNER JOIN user
ON user_task.user_id = user.id
WHERE name = 'Maryrose Meadows' AND month (task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTHNAME(created) as `Month` , count(id) as `Nr Of Tasks`
FROM task
GROUP BY month(created);