const mysql = require('mysql');
const dbConfig = require('../dbutils/dbconfig.js');
const connection1 = mysql.createConnection(
    {host: dbConfig.dbConfig1.HOST,
    user: dbConfig.dbConfig1.USER,
    password: dbConfig.dbConfig1.PASSWORD,
    database: dbConfig.dbConfig1.DB,
  connectTimeout: 30000});

const connection2 = mysql.createConnection({
  host: dbConfig.dbConfig2.HOST,
  user: dbConfig.dbConfig2.USER,
  password: dbConfig.dbConfig2.PASSWORD,
  database: dbConfig.dbConfig2.DB,
  connectTimeout: 30000,
});


connection1.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

connection2.connect(error => {
  // if (error) throw error;
  // console.log("Successfully connected to the second database.");
  if (error) {
    console.error('Error connecting to the second database:', error);
    return;
  }
  console.log("Successfully connected to the second database.");
});

module.exports = { connection1, connection2 }
