USE employee_management_db;

-- Delete database's tables
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS employees;
SET FOREIGN_KEY_CHECKS = 1;

-- Create employee table
CREATE TABLE employees (
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(52),
  last_name VARCHAR(52)
)
