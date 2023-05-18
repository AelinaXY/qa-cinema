const DiscussionBoardPost = require("../models/discussionBoard.js");
const DiscussionBoardPosts = require("../models/discussionBoard.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a discussion board post
  const discussionBoardPost = new DiscussionBoardPost({
    title: req.body.title,
    body: req.body.body,
    film_id: req.body.film_id,
    film_rating: req.body.film_rating,
  });

  // Save post in the database
  DiscussionBoardPost.create(discussionBoardPost, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Post.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const name = req.query.name;

  DiscussionBoardPosts.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving posts.",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  DiscussionBoardPosts.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving post with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  DiscussionBoardPosts.updateById(
    req.params.id,
    new DiscussionBoardPosts(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Post with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Post with id " + req.params.id,
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  DiscussionBoardPosts.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Post with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Post with id " + req.params.id,
        });
      }
    } else res.send({ message: `Post was deleted successfully!` });
  });
};
