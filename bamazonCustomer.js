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

    displayProducts();
});

function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

      console.log("\nWelcome to Bamazon!\n");

      var table = new Table({
        head: ["Item Id #", "Product", "Price"]
      });

      for (var i = 0; i < res.length; i++) {

        table.push(
          [res[i].unique_id, res[i].product_name, "$" + res[i].price]
        );
      }   
       
        console.log(table.toString());

        chooseProduct();
    });

} //End displayProducts function

function chooseProduct() {
    inquirer.prompt([{
        type: "input",
        name: "id",
        message: "Please enter the ID # of the item which you would like to purchase",
    }, {
        type: "input",
        name: "amount",
        message: "How many would you like?",
    }]).then(function(input) {

        var chosenId = input.id;
        var chosenAmount = parseInt(input.amount);

        //Start Query
        connection.query("SELECT * FROM products WHERE unique_id=" + chosenId, function(err, data) {

            if (err) throw err;

            var item = data[0];

            if (chosenAmount <= item.stock_quantity) {

                console.log("\nYou have selected " + chosenAmount + " units of " + item.product_name);

                console.log("\nCongratulations! Your order has been placed! ");

                var newStock_quantity = item.stock_quantity - chosenAmount;

                connection.query("UPDATE products SET stock_quantity= " + newStock_quantity + " WHERE unique_id = " + chosenId, function(err, data) {
                    if (err) throw err;

                    var customerTotal = item.price * chosenAmount;

                    console.log("\nYour total is $" + customerTotal);
                    console.log("\nThank you for shopping with us!\n");

                    stayOrGo();
                })
            }else if(chosenAmount > item.stock_quantity){
              console.log("\nWe're sorry! We do not have enought of that item currently in our inventory. \nPlease begin another order!");

              console.log("\n--------------------------");

              stayOrGo();
            }
        });
    }); //End prompt
} //End chooseProduct function

function stayOrGo(){
  inquirer
    .prompt({
      name: "stayOrGo",
      type: "list",
      message: "Would you like to make another order or exit?",
      choices: ["ORDER", "EXIT"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.stayOrGo === "ORDER") {
        displayProducts();
      }
      else {
        exitBamazon();
      }
    });
}//End staOrGo function

function exitBamazon(){
  connection.end();
}//End exitBamazon function

