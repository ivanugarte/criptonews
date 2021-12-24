-- to create a new database
CREATE DATABASE criptonews;

-- to use database
use criptonews;

-- creating a new table
CREATE TABLE listnews (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(100) NOT NULL,
  author VARCHAR(50),
  fountain VARCHAR(50)
);

-- to show all tables
show tables;

-- to describe table
describe listnews;
