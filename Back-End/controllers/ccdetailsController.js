const CCDetails = require("../models/ccdetails.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a CCDetails
    const ccdetails = new CCDetails({
      cc_user: req.body.cc_user,
      cc_number: req.body.cc_number,
      cc_date: req.body.cc_date,
      cc_ccv: req.body.cc_ccv

    });
  
    // Save CC in the database
    CCDetails.create(ccdetails, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else res.send(data);
    });
  };


exports.findAll = (req, res) => {
  
    CCDetails.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving CC."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    CCDetails.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found CC with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving CC with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    CCDetails.updateById(
      req.params.id,
      new CCDetails(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found CC with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating CC with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    CCDetails.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found CC with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete CC with id " + req.params.id
          });
        }
      } else res.send({ message: `CC was deleted successfully!` });
    });
  };