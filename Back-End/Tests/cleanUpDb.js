const fs = require("fs");
const path = require("path");

const { connection } = require("../dbutils/dbConnect.js");

const cleanUpDb = async () => {
  try {
    await connection.query("DELETE FROM films WHERE film_title ='TestFilm' ");
  } catch (error) {
    console.error("Database cleanup error:", error);
    throw error;
  }
};

const reset = async () => {
  try {
    const sql = fs.readFileSync(
      path.resolve(__dirname, "./schema.sql"),
      "utf8"
    );
    sql.split(";").filter(query => !!query).forEach(async (query) => await connection.query(query));
  } catch (err) {
    throw err;
  }
};

module.exports = { cleanUpDb, reset };
