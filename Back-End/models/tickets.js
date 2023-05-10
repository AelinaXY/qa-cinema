const sql = require("../dbutils/dbConnect.js");

// constructor
const Tickets = function(tickets) {
  this.ticket_showing = tickets.ticket_showing;
  this.ticket_user = tickets.ticket_user;
};

Tickets.create = (newTicket, result) => {
    sql.query("INSERT INTO tickets SET ?", newTicket, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created tickets: ", { id: res.insertId, ...newTicket });
      result(null, { id: res.insertId, ...newTicket });
    });
  };

Tickets.getAll = (result) => {
    let query = "SELECT * FROM tickets";
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
  };

  Tickets.findById = (id, result) => {
    sql.query(`SELECT * FROM tickets WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found ticket: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Ticket with the id
      result({ kind: "not_found" }, null);
    });
  };

  

Tickets.updateById = (id, ticket, result) => {
    sql.query(
      "UPDATE tickets SET ticket_showing = ?, ticket_user = ? WHERE id = ?",
      [ticket.ticket_showing, ticket.ticket_user, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Ticket with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated ticket: ", { id: id, ...ticket });
        result(null, { id: id, ...ticket });
      }
    );
  };
  
  Tickets.remove = (id, result) => {
    sql.query("DELETE FROM tickets WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Ticket with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted ticket with id: ", id);
      result(null, res);
    });
  };

  module.exports = Tickets;