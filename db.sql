DROP DATABASE IF EXISTS employee_db;

create database employee_db;

create table department (
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30) NOT NULL
  );
  
CREATE TABLE role (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
   title VARCHAR(30) NOT NULL, 
   salary DECIMAL NOT NULL default 0,
   department_id INT NOT NULL
   );
   
CREATE TABLE employee (
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL
	); 
    
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee; 

INSERT INTO department (department_name)
VALUES  ("Electrictrician" ,80000, 1),
("Finanical Adviser", 90000, 2),
("Loan Officer", 120000, 3),
("Software Engineer", 100000, 4),
("Sales Rep", 50000, 5); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("James", "Jones", 4, null),
("Ryan", "Paul", 2, null),
("Evan", "Rogers", 1, null),
("John", "Michale", 3, null),
("Tyler", "Williams", 5, null);
