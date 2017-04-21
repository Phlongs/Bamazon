create database Bamazon;

use Bamazon;
create table products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT(40) NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kendrick Lamar", "Damn", "Hiphop", "15.00", 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drake", "More Life", "Hiphop", "15.00", 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Future", "Future", "Hiphop", "15.00", 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Big Sean", "I Decided", "Hiphop", "15.00", 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Migos", "Culture", "Hiphop", "15.00", 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eliane Elias", "Dance of Time", "Jazz", "15.00", 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Norah Jones", "Day Breaks", "Jazz", "15.00", 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cindy Bradley", "Natural", "Jazz", "15.00", 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bill Evans Trio", "On a Monday Evening", "Jazz", "15.00", 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Willie Nelson", "Summertime", "Jazz", "15.00", 18);

SELECT * FROM products;
