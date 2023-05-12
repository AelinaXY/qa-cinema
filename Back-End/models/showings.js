const sql = require("../dbutils/dbConnect.js");

// constructor
const Showings = function(showing) {
  this.showing_film = showing.showing_film;
  this.showing_screen = showing.showing_screen;
  this.showing_time = showing.showing_time;
};

Showings.create = (newShowing, result) => {
  sql.query("INSERT INTO showings SET ?", newShowing, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created showing: ", { id: res.insertId, ...newShowing });
    result(null, { id: res.insertId, ...newShowing });
  });
};

Showings.getAll = (result) => {
  let query = `SELECT * FROM showings`;


  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("showings: ", res);
    result(null, res);
  });
};

Showings.findById = (id, result) => {
  sql.query(`SELECT * FROM showings WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found showing: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Showing with the id
    result({ kind: "not_found" }, null);
  });
};

Showings.updateById = (id, showing, result) => {
  sql.query(
    "UPDATE showings SET showing_film = ?, showing_screen = ?, showing_time = ? WHERE id = ?",
    [showing.showing_film, showing.showing_screen, showing.showing_time, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Showing with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated showing: ", { id: id, ...showing });
      result(null, { id: id, ...showing });
    }
  );
};

Showings.remove = (id, result) => {
  sql.query("DELETE FROM showings WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Showing with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted showing with id: ", id);
    result(null, res);
  });
};

Showings.findByShowingId = (id, result) => {
  sql.query(`select showings.id, showings.showing_screen, showings.showing_time, (screens.screen_max_seats-(SELECT COUNT(*) FROM tickets WHERE ticket_showing = showings.id)) AS "Remaining Seats"  from showings 
  join films on showings.showing_film = films.id
  join screens on showings.showing_screen = screens.id
  where films.id = "${id}";`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found showing: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Showing with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Showings;
