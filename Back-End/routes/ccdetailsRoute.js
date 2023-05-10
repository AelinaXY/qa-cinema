module.exports = app => {
    const ccdetails = require("../controllers/ccdetailsController.js");
  
    var router = require("express").Router();

    // Create a new CC
    router.post("/", ccdetails.create);
  
    // Retrieve all CC
    router.get("/", ccdetails.findAll);

      // Retrieve a single CC with id
    router.get("/:id", ccdetails.findOne);

      // Update a CC with id
    router.put("/:id", ccdetails.update);

      // Delete a CC with id
  router.delete("/:id", ccdetails.delete);
  
    app.use('/cc', router);
  };