const sql = require("../dbutils/dbConnect.js");

// constructor
const Screens = function(screen) {
  this.screen_max_seats = screen.screen_max_seats;
};

Screens.create = (newScreen, result) => {
  sql.query("INSERT INTO screens SET ?", newScreen, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created screen: ", { id: res.insertId, ...newScreen });
    result(null, { id: res.insertId, ...newScreen });
  });
};

Screens.getAll = (result) => {
  sql.query("SELECT * FROM screens", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("screens: ", res);
    result(null, res);
  });
};

Screens.findById = (id, result) => {
  sql.query(`SELECT * FROM screens WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found screen: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Screen with the id
    result({ kind: "not_found" }, null);
  });
};

Screens.updateById = (id, screen, result) => {
  sql.query(
    "UPDATE screens SET screen_max_seats = ? WHERE id = ?",
    [screen.screen_max_seats, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Screen with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated screen: ", { id: id, ...screen });
      result(null, { id: id, ...screen });
    }
  );
};

Screens.remove = (id, result) => {
  sql.query("DELETE FROM screens WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Screen with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted screen with id: ", id);
    result(null, res);
  });
};

module.exports = Screens;