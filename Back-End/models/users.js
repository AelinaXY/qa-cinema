const {connection} = require("../dbutils/dbConnect.js");

// constructor
const Users = function(user) {
  this.user_name = user.user_name;
  this.user_fname = user.user_fname;
  this.user_pass = user.user_pass;
};

Users.create = (newUser, result) => {
    connection.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) {
        
        result(err, null);
        return;
      }
  
      
      result(null, { id: res.insertId, ...newUser });
    });
  };

Users.getAll = (name, result) => {
    let query = "SELECT * FROM users";
  
    if (name) {
      query += ` WHERE name LIKE '%${name}%'`;
    }
  
    connection.query(query, (err, res) => {
      if (err) {
        
        result(null, err);
        return;
      }
  
      
      result(null, res);
    });
  };

  Users.findById = (id, result) => {
    connection.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
      if (err) {
        
        result(err, null);
        return;
      }
  
      if (res.length) {
        
        result(null, res[0]);
        return;
      }
  
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
  };

  

Users.updateById = (id, user, result) => {
    connection.query(
      "UPDATE users SET user_name = ?, user_fname = ?, user_pass = ? WHERE id = ?",
      [user.user_name, user.user_fname, user.user_pass, id],
      (err, res) => {
        if (err) {
          
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found User with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        
        result(null, { id: id, ...user });
      }
    );
  };
  
  Users.remove = (id, result) => {
    connection.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
      if (err) {
        
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      
      result(null, res);
    });
  };

  module.exports = Users;