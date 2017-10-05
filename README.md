# Bamazon
Amazon-like storefront using mySQL

## Overview
An interactive shopping app where MySQL and Nodejs are used to allow users to purchase items as a customer, view, track and update the product inventory as a manager, and track the total sales between different departments as supervisor.

## Customer View

Bamazon's customer view allows users to view the current items available for purchase and make a purchase based on available inventory. 

![items](/Screenshots/ScreenShot_view.png)

### When item is in stock

The user will be prompted to enter the item id# and how many items they wish to purchase. If the item is in stock, the order will be completed and the user will see the total amount of their purchase.

![items](/Screenshots/ScreenShot_inStock.png)

* Note: I installed an npm package called [CLI-Table](https://www.npmjs.com/package/cli-table) to create the table in Bash.

### When item is out of stock

If the item is not in stock they will decide if they would like to make another order or exit.

![items](/Screenshots/ScreenShot_outOfStock.png)

## Manager View

Bamazon's manager view allows users to view and edit the inventory of the store. The user will be prompted to choose from the following options:

* View products for sale
* View low inventory
* Add to inventory
* Add a new product

![manager](/Screenshots/ScreenShot_manager)

#### View Products for Sale

The manager can see all items up for sale.

![manager view](/Screenshots/ScreenShot_viewMan)

#### View Low Inventory

The manager can see any items low on stick with under 5 units left.

![Low Inventory](/Screenshots/ScreenShot_lowInventory)

#### Add to Inventory

The manager can add more units to an items inventory.

![Add Inventory](/Screenshots/ScreenShot_update)

#### Add a new product

The manager can also add a completely new product to Bamazon.

![New Product](/Screenshots/ScreenShot_addProduct)

## Supervisor View

Coming up....
