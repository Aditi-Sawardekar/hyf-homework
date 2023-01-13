-- Databases lesson 1 Homework
USE hyf_class2023;

-- 1. Find out how many tasks are in the task table
SELECT COUNT(id) AS "TOTAL TASKS"
FROM task;

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT count(title) AS "Task Without Valid Due Date"
FROM task
WHERE due_date IS NULL;

-- 3. Find all the tasks that are marked as done
SELECT task.title As "Tasks", status.name As "Status"
FROM task
INNER JOIN status
ON task.status_id = status.id
WHERE status.name = "Done";

-- 4. Find all the tasks that are not marked as done
SELECT title AS "Tasks", name AS "Status"
FROM task 
INNER JOIN status
ON task.status_id = status.id
WHERE NOT name = "Done";

-- 5. Get all the tasks, sorted with the most recently created first
SELECT title, created 
FROM task
ORDER BY created DESC;

-- 6. Get the single most recently created task
SELECT title, created 
FROM task
ORDER BY created DESC
LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
WHERE title like '%database%'
OR
description like '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT task.title, status.name
FROM task
INNER JOIN status
ON task.status_id = status.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.id) AS "Number of Tasks"
FROM task
INNER JOIN status
ON task.status_id = status.id
GROUP BY task.status_id;

-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.status_id) AS "Number of Tasks"
FROM task
INNER JOIN status
ON task.status_id = status.id
GROUP BY task.status_id
ORDER BY COUNT("Number of Tasks") DESC;