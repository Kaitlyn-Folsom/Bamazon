# Bamazon
Amazon-like storefront using mySQL

## Overview
An interactive shopping app where MySQL and Nodejs are used to allow users to purchase items as a customer, view, track and update the product inventory as a manager, and track the total sales between different departments as supervisor.

### Customer View

Bamazon's customer view allows users to view the current items available for purchase and make a purchase based on available inventory. 

![items](/Screenshots/ScreenShot_view.png)

##### When item is in stock

The user will be prompted to enter the item id# and how many items they wish to purchase. If the item is in stock, the order will be completed and the user will see the total amount of their purchase.

![items](/Screenshots/ScreenShot_inStock.png)

* Note: in attemping to make  a simple table of all the products through console logs I discovered an npm package called [NPM CLI-Table](https://www.npmjs.com/package/cli-table). I've utilized this package to easily add a table into my node application. 

##### When item is out of stock

If the item is not in stock they will decide if they would like to make another order or exit.

![items](/Screenshots/ScreenShot_outOfStock.png)

### Manager View

Bamazon's manager view allows users to view and edit the inventory of the store. The user will be prompted to choose from the following options:

* View products for sale
* View low inventory
* Add to inventory
* Add a new product

###### View Products for Sale

![items](/Screenshots/)

###### View Low Inventory

![items](/Screenshots/)

###### Add to Inventory

![items](/Screenshots/)

###### Add a new product

![items](/Screenshots/)

### Supervisor View
