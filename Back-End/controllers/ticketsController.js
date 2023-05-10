const Tickets = require("../models/tickets.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Ticket
    const ticket = new Tickets({
      ticket_showing: req.body.ticket_showing,
      ticket_user: req.body.ticket_user
    });
  
    // Save Ticket in the database
    Tickets.create(ticket, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Ticket."
        });
      else res.send(data);
    });
  };


exports.findAll = (req, res) => {
    const name = req.query.name;
  
    Tickets.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tickets."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Tickets.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Ticket with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Ticket with id " + req.params.id
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
  
    Tickets.updateById(
      req.params.id,
      new Tickets(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Ticket with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Ticket with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    Tickets.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Ticket with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Ticket with id " + req.params.id
          });
        }
      } else res.send({ message: `Ticket was deleted successfully!` });
    });
  };