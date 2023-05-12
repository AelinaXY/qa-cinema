const sql = require("../dbutils/dbConnect.js");

// constructor
const CCDetails = function(CCDetails) {
  this.cc_user = CCDetails.cc_user;
  this.cc_number = CCDetails.cc_number;
  this.cc_date = CCDetails.cc_date;
  this.cc_ccv = CCDetails.cc_ccv;

};

CCDetails.create = (newCC, result) => {
    sql.query("INSERT INTO cc_details SET ?", newCC, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created cc: ", { id: res.insertId, ...newCC });
      result(null, { id: res.insertId, ...newCC });
    });
  };

  CCDetails.getAll = (result) => {
    let query = "SELECT * FROM cc_details";
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("CCDetails: ", res);
      result(null, res);
    });
  };

  CCDetails.findById = (id, result) => {
    sql.query(`SELECT * FROM cc_details WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found CC: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found CC with the id
      result({ kind: "not_found" }, null);
    });
  };

  

  CCDetails.updateById = (id, ccdetails, result) => {
    sql.query(
      "UPDATE cc_details SET cc_user = ?, cc_number = ?, cc_date = ?, cc_ccv = ? WHERE id = ?",
      [ccdetails.cc_user, ccdetails.cc_number, ccdetails.cc_date,ccdetails.ccv, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found CC with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated user: ", { id: id, ...ccdetails });
        result(null, { id: id, ...ccdetails });
      }
    );
  };
  
  CCDetails.remove = (id, result) => {
    sql.query("DELETE FROM cc_details WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found CC with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted CC with id: ", id);
      result(null, res);
    });
  };

  module.exports = CCDetails;