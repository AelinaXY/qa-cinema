const connection = require("../dbutils/dbConnect.js");

// constructor
const Screens = function(screen) {
  this.screen_max_seats = screen.screen_max_seats;
};

Screens.create = (newScreen, result) => {
  connection.query("INSERT INTO screens SET ?", newScreen, (err, res) => {
    if (err) {
      
      result(err, null);
      return;
    }

    
    result(null, { id: res.insertId, ...newScreen });
  });
};

Screens.getAll = (result) => {
  connection.query("SELECT * FROM screens", (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Screens.findById = (id, result) => {
  connection.query(`SELECT * FROM screens WHERE id = ${id}`, (err, res) => {
    if (err) {
      
      result(err, null);
      return;
    }

    if (res.length) {
      
      result(null, res[0]);
      return;
    }

    // not found Screen with the id
    result({ kind: "not_found" }, null);
  });
};

Screens.updateById = (id, screen, result) => {
  connection.query(
    "UPDATE screens SET screen_max_seats = ? WHERE id = ?",
    [screen.screen_max_seats, id],
    (err, res) => {
      if (err) {
        
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Screen with the id
        result({ kind: "not_found" }, null);
        return;
      }

      
      result(null, { id: id, ...screen });
    }
  );
};

Screens.remove = (id, result) => {
  connection.query("DELETE FROM screens WHERE id = ?", id, (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Screen with the id
      result({ kind: "not_found" }, null);
      return;
    }

    
    result(null, res);
  });
};

module.exports = Screens;