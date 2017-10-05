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

    console.log("\nHello Supervisor!\n");

    begin();
});

function begin() {
    inquirer.prompt([{
        name: "task",
        message: "What would you like to do?",
        type: "list",
        choices: ["View Product Sales by Department", "Create New Department", "Log Out"]
    }]).then(function(choice) {
        if (choice.task === "View Product Sales by Department") {
            viewSales();
        } else if (choice.task === "Create New Department") {
            newDepartment();
        } else if (choice.task === "Log Out") {
            logOut();
        }
    });
};

function viewSales() {
    connection.query("SELECT * FROM departments", function(err, res) {
        if (err) throw err;

        var table = new Table({
            head: ["Department ID#", "Department Name", "Overhead Costs", "Product Sales", "Total Profit"]
        });

        for (var i = 0; i < res.length; i++) {

            table.push(
                [res[i].department_id, res[i].department_name, "$" res[i].over_head_costs, "$" + res[i].product_sales, "$" + res[i].totalProfit]
            );
        }

        console.log(table.toString());

        begin();
    });
}

function newDepartment() {

    inquirer.prompt([{
            name: "id",
            message: "Create a Department Id",
            type: "input",
        },{
            name: "name",
            message: "What is the name of the department you would like to create?",
            type: "input"
        },{
            name: "cost",
            message: "What will be the overhead cost?",
            type: "input"
        }]).then(function(input) {
            connection.query("INSERT INTO departments SET ?",
            {
              department_id: input.id,
              department_name: input.name,
              over_head_costs: input.cost
            },
            function(err, res) {
              console.log("\nBamazon now has a new department!\n");

              begin();
            }
        );
    });//End prompt

} //End addProduct function

function logOut() {

    connection.end();

} //End exitBamazon function