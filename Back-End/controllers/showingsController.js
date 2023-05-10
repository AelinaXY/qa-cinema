const Showings = require("../models/showings.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Showing
  const showing = new Showings({
    showing_film: req.body.showing_film,
    showing_screen: req.body.showing_screen,
    showing_time: req.body.showing_time,
  });

  // Save Showing in the database
  Showings.create(showing, (err, data) => {
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

  console.log(req.body);

  Showings.updateById(
    req.params.id,
    new Showings(req.body),
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
    }
  );
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
