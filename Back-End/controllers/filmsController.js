const Films = require("../models/films.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Film
  const film = new Films({
    film_title: req.body.film_title,
    film_year: req.body.film_year,
    film_rating: req.body.film_rating,
    film_genre: req.body.film_genre,
    film_secondary_genre: req.body.film_secondary_genre,
    film_poster: req.body.film_poster
  });

  // Save Film in the database
  Films.create(film, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Film."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const title = req.query.title;

  Films.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving films."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Films.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Film with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Film with id " + req.params.id
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

  Films.updateById(
    req.params.id,
    new Films(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Film with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Film with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Films.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Film with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Film with id " + req.params.id
        });
      }
    } else res.send({ message: `Film was deleted successfully!` });
  });
};

exports.findByGenre = (req, res) => {
  Films.getByGenre(req.params.genre, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving films by genre."
      });
    else res.send(data);
  });
};

exports.findByRating = (req, res) => {
  Films.getByRating(req.params.rating, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving films by rating."
      });
    else res.send(data);
  });
};

exports.findByYear = (req, res) => {
  Films.getByYear(req.params.year, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving films by year."
      });
    else res.send(data);
  });
};

exports.findByTitle = (req, res) => {
  Films.getByTitle(req.params.title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving films by title."
      });
    else res.send(data);
  });
};

exports.findNewReleases = (req, res) => {
  Films.getNewReleases((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving new releases."
      });
    else {
      const newReleases = data.map(film => {
        return {
          film_title: film.film_title,
          film_poster: film.film_poster,
          film_rating: film.film_rating
        };
      });
      res.send(newReleases);
    }
  });
};