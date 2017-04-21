var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Book1234",
  database: "Bamazon"

});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
});

var initTable = function() {
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  //console.log(res[0].item_id, res[0].product_name, res[0].department_name, res[0].price, res[0].stock_quantity);
  for (var i=0; i<res.length; i++){
  console.log("Item Id: " + res[i].item_id + "|" + "Product Name: " + res[i].product_name + "|" + "Dept Name: " + res[i].department_name + "|" + "Price: "+ res[i].price + "|" + "Qty: " + res[i].stock_quantity);
  }

  promptUser();
});
}

initTable();

var promptUser = function() {
  inquirer.prompt([
  {
    name: "item",
    type: "input",
    message: "What item id would you like to buy?"
  },
  {
    name: "qty",
    type: "input",
    message: "How much would you like to buy?"
  }
]).then(function(answer) {
  //console.log(answer.qty);
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    var item = answer.item - 1;
    var cost = answer.item * res[item].price;
    if((answer.item == res[item].item_id)&&(answer.qty<=res[item].stock_quantity)){
        console.log('Bought!');
        var newQty = res[item].stock_quantity - answer.qty;
        //console.log(newQty);
        connection.query("UPDATE products SET ? WHERE ?", [{
        stock_quantity: newQty
      },
      {
          item_id: res[item].item_id

      }], function(err) {
          console.log("Total cost of purchase: " + cost);
      });

      } else if(answer.qty>res[item].stock_quantity){
        console.log("Insufficient Qty!");
      }
          connection.end();
    });
  });

    //console.log(res[answer.item].item_id);

  }
