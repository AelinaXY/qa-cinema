module.exports = app => {
    const tickets = require("../controllers/ticketsController.js");
  
    var router = require("express").Router();

    // Create a new Ticket
    router.post("/", tickets.create);
  
    // Retrieve all Ticket
    router.get("/", tickets.findAll);

      // Retrieve a single Ticket with id
    router.get("/:id", tickets.findOne);

      // Update a Ticket with id
    router.put("/:id", tickets.update);

      // Delete a Ticket with id
  router.delete("/:id", tickets.delete);
  
    app.use('/tickets', router);
  };