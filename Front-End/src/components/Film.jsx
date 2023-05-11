import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Film() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/films')
      .then(response => {
        setFilms(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Films</h1>
      {films.map(film => (
        <div key={film.id}>
          <p>Title: {film.film_time}</p>
          <p>Release Date: {film.film_year}</p>
          <p>Rating: {film.film_rating}</p>
        </div>
      ))}
    </div>
  );
}

export default Film;