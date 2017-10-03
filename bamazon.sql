DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  unique_id INT (4)NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT (10) NOT NULL
);

INSERT INTO products (unique_id, product_name, department_name, price, stock_quantity)
VALUES  (1001, "Shampoo", "Cosmetics", 3.75, 500),
		(1002, "Conditioner", "Cosmetics", 3.25, 627),
		(1003, "Trash Bags", "Grocery", 5.99, 300),
		(1004, "Paper Towels", "Grocery", 4.25, 400),
		(1005, "Apples", "Produce", 0.50, 800),
		(1006, "Bananas", "Produce", 0.35, 150),
		(1007, "Orange Juice", "Grocery", 3.50, 45),
		(1008, "Milk", "Grocery", 3.99, 200),
		(1009, "Tonka Truck", "Children's Toys", 14.75, 20);
		