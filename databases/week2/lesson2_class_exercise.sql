-- Databases lesson 2 Class Exercise
USE hyf_lesson2;

-- Get all the tasks assigned to Pavel;
SELECT title
FROM task
INNER JOIN user_task
ON task.id = user_task.task_id
INNER JOIN user
ON user_id = user.id
WHERE name like '%Pavel%';

-- Find how many tasks each user is responsible for;
-- 44 tasks
SELECT user_id, COUNT(task_id)
FROM user_task
GROUP BY user_id;

-- Find how many tasks with a status=Done each user is responsible for;
SELECT task.id, COUNT(task.id)
FROM task
INNER JOIN status
ON task.status_id = status.id
WHERE status.name = "Done"
GROUP BY task.id;

-- Databases lesson 2 Homework
-- Part 1 - Working with tasks
-- Write the following sql queries:

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task (id, title, description, created, updated, due_date, status_id) values (36, 'Class22 Graduation', 'Attend the event', '2023-01-15 06:54:16', '2023-01-17 13:05:09', '2023-01-18', 3);

-- Change the title of a task
UPDATE task
SET title = 'Look at Villa in Gentofte'
WHERE id = 25;

-- Change a task due date
UPDATE task
SET due_date = '2023-03-31 10:05:09'
WHERE id = 25;

-- Change a task status
UPDATE task
SET status_id = 2
WHERE id = 25;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 10;

-- Delete a task
DELETE FROM task WHERE id= 34;

-- In all the above queries, you choose which is the task that you will modify/delete.