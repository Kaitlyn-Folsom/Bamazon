var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;

    begin();
});

function begin() {
    inquirer.prompt([{
        name: "task",
        message: "What would you like to do?",
        type: "list",
        choices: ["View Products", "View low Inventory", "Add to Inventory", "Add new Product", "Log Out"]
    }]).then(function(choice) {
        if (choice.task === "View Products") {
            viewInventory();
        } else if (choice.task === "View low Inventory") {
            viewLowInventory();
        } else if (choice.task === "Add to Inventory") {
            updateInventory();
        } else if (choice.task === "Add new Product") {
            addProduct();
        } else if (choice.task === "Log Out") {
            logOut();
        }
    });
};

function viewInventory() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

        console.log("\nBamazon's Current Inventory!\n\nItem ID | Product | Department | Price | Quantity\n");

        for (var i = 0; i < res.length; i++) {

            console.log(res[i].unique_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + res[i].stock_quantity + "\n");
        }

        begin();
    });
}

function viewLowInventory() {
    // If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

    connection.query("SELECT * FROM products WHERE stock_quantity <= 5", function(err, res) {
        if (err) throw err;

        console.log("\nThese products are low on inventory\n");

        console.log("Item ID | Product | Department | Quantity\n");

        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5) {
                console.log(res[i].unique_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].stock_quantity + "\n");
            } else if (res[i].stock_quantity > 5) {
                console.log("No items are low on inventory!")
            }
        }



        begin();
    });
} // end view LowInventory function

function updateInventory() {

    // If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
    inquirer.prompt([{
        name: "id",
        message: "Please enter the ID of the product you would like to update.",
        type: "input",
    }, {
        name: "amount",
        message: "How much of this item would you like to add?",
        type: "input"
    }]).then(function(input) {
        connection.query("UPDATE products SET stock_quantity=stock_quantity+" + input.amount + " WHERE unique_id=" + input.id, function(err, res) {
            console.log(input.affectedRows + " products updated!\n");
            console.log("You now have " + input.stock_quantity + " units of " + input.product_name + ".");
        });

        begin();
    });

} //End updateInventory function

function addProduct() {

    // If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.

} //End addProduct function

function logOut() {

    connection.end();

} //End exitBamazon function