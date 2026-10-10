# Querying and Joins

```sql
drop database relationship;

CREATE DATABASE relationship;
USE relationship;
CREATE TABLE Departments(
	department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL,
    location VARCHAR(100)
);

CREATE TABLE Employees(
	employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2),
    hire_date DATE,
    department_id INT,
    FOREIGN KEY (department_id)
		REFERENCES Departments(department_id)
);

INSERT INTO Departments (department_name, location)
VALUES
('IT', 'Mumbai'),
('HR', 'Pune'),
('Finance', 'Delhi'),
('Marketing', 'Bangalore');

INSERT INTO Employees
(employee_name, email, salary, hire_date, department_id)
VALUES
('Rahul', 'rahul@example.com', 50000, '2025-01-10', 1),
('Priya', 'priya@example.com', 60000, '2025-02-15', 1),
('Amit', 'amit@example.com', 45000, '2025-03-20', 2),
('Neha', 'neha@example.com', 55000, '2025-04-05', 3),
('Karan', 'karan@example.com', 40000, '2025-05-12', NULL);

SELECT *
FROM Departments;
SELECT * 
FROM Employees;

-- Selecting columns
-- giving alias name

SELECT employee_id as "Employee ID",employee_name as "Employee Name",salary Salary, department_id Department
FROM Employees;

-- Write query to get department id and name from Department
SELECT department_id as "Department", department_name as "Department"
FROM Departments;

-- WHERE Clause

SELECT employee_id as "Employee ID",employee_name as "Employee Name",salary Salary, department_id Department
FROM Employees
WHERE salary > 50000;

SELECT employee_id as "Employee ID",employee_name as "Employee Name",salary Salary, department_id Department
FROM Employees
WHERE employee_id = 2;
-- Sorting
-- ASE
SELECT 
	employee_id,
    employee_name,
    salary,
    hire_date
FROM employees
ORDER BY employee_name;

-- DESC
SELECT 
	employee_id,
    employee_name,
    salary,
    hire_date
FROM employees
ORDER BY salary DESC;

-- LIMIT (find highest paid employee)
SELECT 
	employee_id,
    employee_name,
    salary,
    hire_date
FROM employees
ORDER BY salary DESC
LIMIT 1;

-- Pagination
SELECT * 
FROM Employees
LIMIT 2;

SELECT * 
FROM Employees
LIMIT 2
OFFSET 2;

-- Alias with AS
SELECT employee_id AS ID,employee_name AS Name,salary AS Salary, department_id AS "Department ID"
FROM Employees;

-- Alias without as (both are same) - as is optional
SELECT employee_id ID,employee_name Name,salary Salary, department_id "Department ID"
FROM Employees
Where salary >= 50000
order by salary DESC;

-- INNER JOIN
SELECT 
	emp.employee_id,
    emp.employee_name,
    dep.department_name
FROM employees emp
INNER JOIN departments dep
ON emp.department_id = dep.department_id;

-- LEFT JOIN
SELECT 
	emp.employee_id,
    emp.employee_name,
    dep.department_name
FROM employees emp
LEFT JOIN departments dep
ON emp.department_id = dep.department_id;

-- Right JOIN
SELECT 
	emp.employee_id,
    emp.employee_name,
    dep.department_name
FROM employees emp
RIGHT JOIN departments dep
ON emp.department_id = dep.department_id;

-- FULL Outer Join
SELECT 
	emp.employee_id,
    emp.employee_name,
    dep.department_name
FROM employees emp
LEFT JOIN departments dep
ON emp.department_id = dep.department_id

UNION

SELECT 
	emp.employee_id,
    emp.employee_name,
    dep.department_name
FROM employees emp
RIGHT JOIN departments dep
ON emp.department_id = dep.department_id;

-- Self Join
ALTER Table Employees
ADD COLUMN manager_id INT NULL;

UPDATE Employees 
SET  manager_id= NULL 
WHERE employee_id=1;

UPDATE Employees 
SET  manager_id= 1 
WHERE employee_id IN (2,3,5);

UPDATE Employees 
SET  manager_id= 2 
WHERE employee_id IN (4);

SELECT
	e1.employee_name as Employee,
    e2.employee_name as Manager
FROM Employees e1
LEFT JOIN Employees e2
	on e1.manager_id = e2.employee_id;

--  Filtering Joined Records

SELECT 
    e.employee_name Name,
    e.salary Salary,
    d.department_name Department
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id
WHERE d.department_name = 'Finance'
	AND e.salary>=55000
ORDER BY e.salary DESC;

```