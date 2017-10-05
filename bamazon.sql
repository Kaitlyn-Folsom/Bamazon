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
VALUES  (1001, "Shampoo", "Cosmetics", 3.75, 30),
		(1002, "Conditioner", "Cosmetics", 3.25, 4),
		(1003, "Nail Polish", "Cosmetics", 3.00, 25),
		(1004, "Trash Bags", "Grocery", 5.99, 60),
		(1005, "Paper Towels", "Grocery", 4.25, 50),
		(1006, "Apples", "Grocery", 0.50, 50),
		(1007, "Bananas", "Grocery", 0.35, 40),
		(1008, "Orange Juice", "Grocery", 3.50, 45),
		(1009, "Milk", "Grocery", 3.99, 30),
		(1010, "Tonka Truck", "Children's Toys", 34.75, 2),
        (1011, "Barbie", "Children's Toys", 15.00, 20),
        (1012, "Basketball", "Children's Toys", 10.25, 30),
        (1013, "Men's T-Shirt", "Clothing", 8.99, 15),
        (1014, "Men's Jeans", "Clothing", 24.75, 20);
		