const {connection} = require("../dbutils/dbConnect.js");

// constructor
const Films = function(film) {
  this.film_title = film.film_title;
  this.film_year = film.film_year;
  this.film_rating = film.film_rating;
  this.film_genre = film.film_genre;
  this.film_secondary_genre = film.film_secondary_genre;
  this.film_poster = film.film_poster;
};

Films.create = (newFilm, result) => {
  connection.query("INSERT INTO films SET ?", newFilm, (err, res) => {
    if (err) {
      
      result(err, null);
      return;
    }

    
    result(null, { id: res.insertId, ...newFilm });
  });
};

Films.getAll = (title, result) => {
  let query = "SELECT * FROM films";

  if (title) {
    query += ` WHERE film_title LIKE '%${title}%'`;
  }

  connection.query(query, (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Films.findById = (id, result) => {
  connection.query(`SELECT * FROM films WHERE id = ${id}`, (err, res) => {
    if (err) {
      
      result(err, null);
      return;
    }

    if (res.length) {
      
      result(null, res[0]);
      return;
    }

    // not found Film with the id
    result({ kind: "not_found" }, null);
  });
};

Films.updateById = (id, film, result) => {
  connection.query(
    "UPDATE films SET film_title = ?, film_year = ?, film_rating = ?, film_genre = ?, film_secondary_genre = ?, film_poster = ? WHERE id = ?",
    [film.film_title, film.film_year, film.film_rating, film.film_genre, film.film_secondary_genre, film.film_poster, id],
    (err, res) => {
      if (err) {
        
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Film with the id
        result({ kind: "not_found" }, null);
        return;
      }

      
      result(null, { id: id, ...film });
    }
  );
};

Films.remove = (id, result) => {
  connection.query("DELETE FROM films WHERE id = ?", id, (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Film with the id
      result({ kind: "not_found" }, null);
      return;
    }

    
    result(null, res);
  });
};

Films.findByGenre = (genre, result) => {
  connection.query(`SELECT * FROM films WHERE film_genre LIKE '%${genre}%'`, (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Films.findByRating = (rating, result) => {
  connection.query(`SELECT * FROM films WHERE film_rating = '${rating}'`, (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Films.findByYear = (year, result) => {
  connection.query(`SELECT * FROM films WHERE film_year = ${year}`, (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Films.findByTitle = (title, result) => {
  connection.query(`SELECT * FROM films WHERE film_title LIKE '%${title}%'`, (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Films.findNewReleases = (result) => {
  connection.query(`SELECT film_title, film_poster, film_rating FROM films WHERE film_year = YEAR(CURRENT_DATE())`, (err, res) => {
    if (err) {
      
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

module.exports = Films;
