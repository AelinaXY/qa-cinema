const connection = require("../dbutils/dbConnect.js");

// constructor
const CCDetails = function(CCDetails) {
  this.cc_user = CCDetails.cc_user;
  this.cc_number = CCDetails.cc_number;
  this.cc_date = CCDetails.cc_date;
  this.cc_ccv = CCDetails.cc_ccv;

};

CCDetails.create = (newCC, result) => {
  connection.query("INSERT INTO cc_details SET ?", newCC, (err, res) => {
      if (err) {
        
        result(err, null);
        return;
      }
  
      
      result(null, { id: res.insertId, ...newCC });
    });
  };

  CCDetails.getAll = (result) => {
    let query = "SELECT * FROM cc_details";
  
    connection.query(query, (err, res) => {
      if (err) {
        
        result(null, err);
        return;
      }
  
      
      result(null, res);
    });
  };

  CCDetails.findById = (id, result) => {
    connection.query(`SELECT * FROM cc_details WHERE id = ${id}`, (err, res) => {
      if (err) {
        
        result(err, null);
        return;
      }
  
      if (res.length) {
        
        result(null, res[0]);
        return;
      }
  
      // not found CC with the id
      result({ kind: "not_found" }, null);
    });
  };

  

  CCDetails.updateById = (id, ccdetails, result) => {
    connection.query(
      "UPDATE cc_details SET cc_user = ?, cc_number = ?, cc_date = ?, cc_ccv = ? WHERE id = ?",
      [ccdetails.cc_user, ccdetails.cc_number, ccdetails.cc_date,ccdetails.ccv, id],
      (err, res) => {
        if (err) {
          
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found CC with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        
        result(null, { id: id, ...ccdetails });
      }
    );
  };
  
  CCDetails.remove = (id, result) => {
    connection.query("DELETE FROM cc_details WHERE id = ?", id, (err, res) => {
      if (err) {
        
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found CC with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      
      result(null, res);
    });
  };

  module.exports = CCDetails;