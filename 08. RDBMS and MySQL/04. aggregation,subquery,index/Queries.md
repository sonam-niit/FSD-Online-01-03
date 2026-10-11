## Aggregation Functions

```sql
USE relationship;

--  Aggregate Functions

SELECT * 
FROM employees;

SELECT * 
FROM departments;

SELECT
	COUNT(*) AS total_rows,
    COUNT(department_id) department_with_values,
    COUNT(DISTINCT department_id) unique_departments,
    COUNT(*) AS total_employees
FROM employees;

SELECT
	SUM(salary) AS total_salary,
    AVG(salary) as avg_salary
FROM employees;
-- Bonus included for each employee
SELECT
	SUM(salary+5000) AS bonus_salary
FROM employees;

SELECT
	department_id,
	SUM(salary) AS "Total Salary"
FROM employees
GROUP BY department_id;

-- get Department Name

SELECT
	d.department_name,
	AVG(e.salary) AS "Total Salary"
FROM employees e
INNER JOIN Departments d
ON e.department_id = d.department_id
GROUP BY e.department_id;

-- Average with 2 decimal
SELECT
	d.department_name,
	Round(AVG(e.salary),2) AS "Total Salary"
FROM employees e
INNER JOIN Departments d
ON e.department_id = d.department_id
GROUP BY e.department_id;

-- MAX

SELECT
	MAX(salary) max_salary,
    MIN(salary) min_salary
FROM employees;

-- max salary department wise

SELECT
	d.department_name,
	MAX(e.salary) AS "MAX Salary"
FROM employees e
INNER JOIN Departments d
ON e.department_id = d.department_id
GROUP BY e.department_id;




-- Count Employees earning more than 40,000
SELECT
	COUNT(*) AS total_employees
FROM employees
WHERE salary > 40000;

-- Find  the total salary of employees in IT department
SELECT SUM(e.salary) AS total_salary
FROM Employees e
INNER JOIN Departments d
ON e.department_id = d.department_id
WHERE d.department_name = 'IT';

-- Display the average salary for each department, sorted from highest to lowest.
SELECT
	d.department_name,
    ROUND(AVG(e.salary), 2) AS avg_salary
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id
GROUP BY d.department_id, d.department_name
ORDER BY avg_salary DESC;


```

## Group By Clause

```sql
SELECT 	
	department_id,
    COUNT(*) total_employees
FROM employees
group by department_id;

-- same query for min, max, sum and avg
-- try one with department name, do join

-- Having
SELECT 	
	department_id,
    COUNT(*) total_employees
FROM employees
group by department_id
Having COUNT(*)>=2;

SELECT
	d.department_name,
	count(*) AS "Total Employees"
FROM employees e
INNER JOIN Departments d
ON e.department_id = d.department_id
GROUP BY e.department_id
Having count(*)>=1;

-- Max

SELECT
	d.department_name,
	MAX(salary) AS "Max Salary"
FROM employees e
INNER JOIN Departments d
ON e.department_id = d.department_id
GROUP BY e.department_id
HAVING MAX(salary)>50000;

-- SUB Queries
-- Select only those employees whose salary is higher then avg salary
SELECT employee_name,salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM Employees);

-- Select Employees who works in IT department
SELECT employee_name,salary,hire_date
FROM employees
Where department_id = (SELECT department_id from Departments where department_name = "IT");
```

## Indexing for Performance Improovement

```sql

-- Undestand performance without index
Explain analyze
SELECT * 
FROM employees
WHERE email = "neha@example.com";

-- Let's Create Index
CREATE UNIQUE INDEX idx_employee_email
ON Employees(email);

-- check performance again
Explain analyze
SELECT * 
FROM employees
WHERE email = "neha@example.com";

```