
module.exports = app => {
  const showings = require("../controllers/showingsController.js");
  var router = require("express").Router();

  // Create a new showing
  router.post("/", showings.create);

  // Retrieve all showings
  router.get("/", showings.findAll);

  // Retrieve a single showing by id
  router.get("/:id", showings.findOne);

  // Update a showing by id
  router.put("/:id", showings.update);

  // Delete a showing by id
  router.delete("/:id", showings.delete);

  app.use('/showings', router);
};
