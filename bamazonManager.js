var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("\nHello Manager!\n");

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

        var table = new Table({
            head: ["Item Id#", "Product Name", "Department Name", "Price", "Stock Quantity"]
        });

        for (var i = 0; i < res.length; i++) {

            table.push(
                [res[i].unique_id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].stock_quantity + " units"]
            );
        }

        console.log(table.toString());

        begin();
    });
}

function viewLowInventory() {

    connection.query("SELECT * FROM products WHERE stock_quantity<=5", function(err, res) {
        if (err) throw err;

        // if (res) {
        for (var i = 0; i < res.length; i++) {
            var items = res[i];


            console.log("\nThese products are low on inventory\n");

            var table = new Table({
                head: ["Item Id#", "Product Name", "Department Name", "Price", "Stock Quantity"]
            });


            table.push([items.unique_id, items.product_name, items.department_name, "$" + items.price, items.stock_quantity + " units"]);

            console.log(table.toString());
        } //End for loop

        if (res = undefined) {

            console.log("\nNo items are low on inventory!\n");

        } //End if/else statement

        begin();

    }); //End connection.query

} // end view LowInventory function

function updateInventory() {

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
            console.log("\n" + res.affectedRows + " product updated!\n");
            console.log("You now have " + input.stock_quantity + " units of " + input.product_name + ".");

            begin();
        }); //End connection


    });//End prompt

} //End updateInventory function

function addProduct() {

    inquirer.prompt([{
            name: "id",
            message: "Create a product Id",
            type: "input",
        },{
            name: "name",
            message: "What is the name of the item you would like to add?",
            type: "input"
        },{
            name: "department",
            message: "Choose a department to add your product to",
            type: "input"
        },{
            name: "price",
            message: "What is the price for the item?",
            type: "input"
        },{
            name: "quantity",
            message: "How much of this item is in stock?",
            type: "input"
        }]).then(function(input) {
            connection.query("INSERT INTO products SET ?",
            {
              unique_id: input.id,
              product_name: input.name,
              department_name: input.department,
              price: input.price,
              stock_quantity: input.quantity
            },
            function(err, res) {
              console.log("\n" + input.name + " has been added to Bamazon!\n");

              begin();
            }
        );
    });//End prompt

} //End addProduct function

function logOut() {

    connection.end();

} //End exitBamazon function
