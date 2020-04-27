DROP DATABASE IF EXISTS employee_db;

create database employee_db;
use employee_db;
create table department (
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30) NOT NULL
  );
  
CREATE TABLE roles (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
   title VARCHAR(30) NOT NULL, 
   salary DECIMAL NOT NULL default 0,
   department_id INT NOT NULL
   );
   
CREATE TABLE employee (
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL
	); 
    
SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee; 

INSERT INTO roles (title, salary, department_id)
VALUES  ("Electrictrician" ,80000, 1),
("Finanical Adviser", 90000, 2),
("Loan Officer", 120000, 3),
("Software Engineer", 100000, 4),
("Sales Rep", 50000, 5); 

INSERT INTO department (department_name) 
values ("Energy"),
("Sales"),
("IT"), 
("Finance"),
("Customer Service");

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("James", "Jones", 4),
("Ryan", "Paul", 2 ),
("Evan", "Rogers", 1 ),
("John", "Michale", 3 ),
("Tyler", "Williams", 5);


