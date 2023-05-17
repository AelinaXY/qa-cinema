const mysql = require("mysql");
const { prodConfig, testConfig } = require("./dbconfig.json");

const config = process.env.NODE_ENV === 'test' ? testConfig : prodConfig;


const connection = mysql.createConnection({
  ...config,
  connectTimeout: 30000,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});


module.exports = {connection};
