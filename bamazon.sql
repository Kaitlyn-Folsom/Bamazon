DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  unique_id INT (4)NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT (10) NOT NULL,
  product_sales INT (10)
);

INSERT INTO products (unique_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES  (1001, "Shampoo", "Cosmetics", 3.75, 30, 0),
		(1002, "Conditioner", "Cosmetics", 3.25, 4, 0),
		(1003, "Nail Polish", "Cosmetics", 3.00, 25, 0),
		(1004, "Trash Bags", "Grocery", 5.99, 60, 0),
		(1005, "Paper Towels", "Grocery", 4.25, 50, 0),
		(1006, "Apples", "Grocery", 0.50, 50, 0),
		(1007, "Bananas", "Grocery", 0.35, 40, 0),
		(1008, "Orange Juice", "Grocery", 3.50, 45, 0),
		(1009, "Milk", "Grocery", 3.99, 30, 0),
		(1010, "Tonka Truck", "Children's Toys", 34.75, 2, 0),
        (1011, "Barbie", "Children's Toys", 15.00, 20, 0),
        (1012, "Basketball", "Children's Toys", 10.25, 30, 0),
        (1013, "Men's T-Shirt", "Clothing", 8.99, 15, 0),
        (1014, "Men's Jeans", "Clothing", 24.75, 20, 0);

CREATE TABLE departments(
	department_id INT (4) NOT NULL,
	department_name VARCHAR (30) NOT NULL,
	over_head_costs INT (10) NOT NULL
);

INSERT into departments (department_id, department_name, over_head_costs)
VALUES (01, "Cosmetics", 500.00),
		(02, "Grocery", 800.00),
		(03, "Children's Toys", 400.00),
		(04, "Clothing", 600.00);
		