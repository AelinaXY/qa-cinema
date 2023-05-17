
module.exports = (app) => {
    const discussionBoardPosts = require("../controllers/discussionBoardController.js");
  var router = require("express").Router();

  // Create a new post
  router.post("/", discussionBoardPosts.create);

  // Retrieve all posts
  router.get("/", discussionBoardPosts.findAll);

  // Retrieve a single posts by id
  router.get("/:id", discussionBoardPosts.findOne);

  // Update a post by id
  router.put("/:id", discussionBoardPosts.update);

  // Delete a post by id
  router.delete("/:id", discussionBoardPosts.delete);

  app.use('/discussionBoard', router);
};