const Showings = require("../models/showings.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }



  // Save Showing in the database
  Showings.create(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Showing."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Showings.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving showings."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Showings.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Showing with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Showing with id " + req.params.id
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

  

  Showings.updateById(
    req.params.id,
    req.body,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Showing with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Showing with id " + req.params.id
          });
        }
      } else res.send(data);
    })
};

exports.delete = (req, res) => {
  Showings.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Showing with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Showing with id " + req.params.id
        });
      }
    } else res.send({ message: `Showing was deleted successfully!` });
  });
};

  exports.findTitle = (req, res) => {
    Showings.findByTitle(req.params.title, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Showing with Title ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Showing with that Title " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

