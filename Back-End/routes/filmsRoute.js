module.exports = app => {
    var router = require("express").Router();
    const films = require("../controllers/filmsController.js");

    // Create a new film
    router.post("/", films.create);

    // Retrieve all films
    router.get("/", films.findAll);

    // Retrieve a single film by id
    router.get("/byId/:id", films.findOne);

    // Update a film by id
    router.put("/:id", films.update);

    // Delete a film by id
    router.delete("/:id", films.delete);

    // Retrieve films by genre
    router.get("/genre/:genre", films.findByGenre);

    // Retrieve films by rating
    router.get("/rating/:rating", films.findByRating);

    // Retrieve films by year
    router.get("/year/:year", films.findByYear);

    // Retrieve films by title
    router.get("/title/:title", films.findByTitle);

    // Retrieve new releases
    router.get("/new-releases/", films.findNewReleases);

    app.use('/films',router)

}