import React, { useState } from 'react';

const filmsData = [
  
    {
    "film_title": "Joker",
    "film_year": 2019,
    "film_rating": "15",
    "film_genre": "Crime",
    "film_secondary_genre": "Drama",
    "film_poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    "film_title": "Spider-Man: No Way Home",
    "film_year": 2021,
    "film_rating": "PG-13",
    "film_genre": "Action",
    "film_secondary_genre": "Adventure",
    "film_poster": "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7260.jpg?v=1640349274"
  },
  {
    "film_title": "The Batman",
    "film_year": 2022,
    "film_rating": "PG-13",
    "film_genre": "Action",
    "film_secondary_genre": "Crime",
    "film_poster": "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/TheBatman_VERT_MONTAGE_2764x4096_INTL-540359.jpg?v=1646430239"
  },
  {
    "film_title": "Guardians of the Galaxy Vol. 3",
    "film_year": 2023,
    "film_rating": "PG-13",
    "film_genre": "Action",
    "film_secondary_genre": "Adventure",
    "film_poster": "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_0661-1_1024x1024@2x.jpg?v=1673620887"
  }
];

const FilmSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const results = filmsData.filter((film) =>
      film.film_title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search films here..."
        value={searchQuery}
        onChange={handleSearch}
      />

      {searchResults.map((film) => (
        <div key={film.film_title}>
          <h2>{film.film_title}</h2>
          <p>Year: {film.film_year}</p>
          <p>Rating: {film.film_rating}</p>
          <p>Genre: {film.film_genre}</p>
          <p>Secondary Genre: {film.film_secondary_genre}</p>
          <img src={film.film_poster} alt={film.film_title} />
        </div>
      ))}
    </div>
  );
};

export default FilmSearch;
