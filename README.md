# Bamazon
Amazon-like storefront using mySQL

## Overview
An interactive shopping app where MySQL and Nodejs are used to allow users to purchase items as a customer, view, track and update the product inventory as a manager, and track the total sales between different departments as supervisor.

## Customer View

Bamazon's customer view allows users to view the current items available for purchase and make a purchase based on available inventory. 

![items](/Screenshots/ScreenShot_view.png)

* Note: I installed an npm package called [CLI-Table](https://www.npmjs.com/package/cli-table) to create the table in Bash.

### When item is in stock

The user will be prompted to enter the item id# and how many items they wish to purchase. If the item is in stock, the order will be completed and the user will see the total amount of their purchase.

![items](/Screenshots/ScreenShot_inStock.png)

### When item is out of stock

If the item is not in stock they will decide if they would like to make another order or exit.

![items](/Screenshots/ScreenShot_outOfStock.png)

## Manager View

Bamazon's manager view allows users to view and edit the inventory of the store. The user will be prompted to choose from the following options:

* View products for sale
* View low inventory
* Add to inventory
* Add a new product

![manager](/Screenshots/ScreenShot_manager.png)

### View Products for Sale

The manager can see all items up for sale.

![manager view](/Screenshots/ScreenShot_viewMan.png)

### View Low Inventory

The manager can see any items low on stick with under 5 units left.

![Low Inventory](/Screenshots/ScreenShot_lowInventory.png)

### Add to Inventory

The manager can add more units to an items inventory. Here I have added 10 more units of Tonka Trucks to the store:

![Add Inventory](/Screenshots/ScreenShot_update.png)

### Add a new product

The manager can also add a completely new product to Bamazon. Here Bamazon is now selling Cereal:

![New Product](/Screenshots/ScreenShot_addProduct.png)

## Supervisor View (UNDER CONSTRUCTION...)

The Bamazon supervisor has the ability to:

   * View Product Sales by Department
   
   * Create New Department

![supervisor view](/Screenshots/ScreenShot_supervisor.png)

### View Product Sales (UNDER CONSTRUCTION...)

When a supervisor selects view product sales, Bamazon will display a summarized table.

Currently Product Sales and Total Profit are undefined. Will fix soon.

![product sales](/Screenshots/ScreenShot_sales.png)

### Create new Department

When a supervisor selects create new department, they will be asked to fill enter a new department id and name. Here you can see a supervisor added a new pet supplies department:

![new department](/Screenshots/ScreenShot_newDep.png)


