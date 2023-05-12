
module.exports = app => {
    const screens = require("../controllers/screensController.js");
  var router = require("express").Router();

  // Create a new screen
  router.post("/", screens.create);

  // Retrieve all screens
  router.get("/", screens.findAll);

  // Retrieve a single screen by id
  router.get("/:id", screens.findOne);

  // Update a screen by id
  router.put("/:id", screens.update);

  // Delete a screen by id
  router.delete("/:id", screens.delete);

  app.use('/screens', router);
};