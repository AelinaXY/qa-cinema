const mysql = require('mysql');
const dbConfig = require('./dbconfig.js');
console.log(dbConfig);
const connection = mysql.createConnection(
    {host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
  connectTimeout: 30000});


connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

module.exports = (connection)