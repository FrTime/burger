// Setting requirement for mySQL
const mysql = require("mysql"),
  // Setting connection to the burger_db database
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });

// Connecting to the database
connection.connect(error => {
  if (error) throw error;
  console.log(`Connected as ID: ${connection.threadId}`);
});

// Exporting connection for use in the ORM
module.exports = connection;
