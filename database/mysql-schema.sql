CREATE DATABASE polyglotdb;
USE polyglotdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product VARCHAR(100),
    amount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name,email) VALUES
('John','john@test.com'),
('Sara','sara@test.com');

INSERT INTO orders (user_id,product,amount) VALUES
(1,'Laptop',900),
(1,'Mouse',20),
(2,'Phone',500);