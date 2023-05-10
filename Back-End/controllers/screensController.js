const Screens = require("../models/screens.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Screen
  const screen = new Screens({
    screen_max_seats: req.body.screen_max_seats
  });

  // Save Screen in the database
  Screens.create(screen, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Screen."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
  
    Screens.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving screens."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Screens.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Screen with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Screen with id " + req.params.id
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
  
    Screens.updateById(
      req.params.id,
      new Screens(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Screen with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Screen with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    Screens.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Screen with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Screen with id " + req.params.id
          });
        }
      } else res.send({ message: `Screen was deleted successfully!` });
    });
  };