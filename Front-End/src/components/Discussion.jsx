import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Discussion = () => {
  const [discussions, setDiscussions] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [filmId, setFilmId] = useState('');
  const [rating, setRating] = useState(0);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }};

  useEffect(() => {
    fetchDiscussions();
  }, []);

  const fetchDiscussions = () => {
    axios
      .get('http://localhost:8080/discussion_board', config)
      .then((response) => {
        setDiscussions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateDiscussion = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/discussion_board', {
        title,
        body,
        film_id: filmId,
        film_rating: rating,
      }, config)
      .then((response) => {
        console.log(response.data);
        fetchDiscussions(); 
      })
      .catch((error) => {
        console.log(error);
      });

    setTitle('');
    setBody('');
    setFilmId('');
    setRating(0);
  };

  // Handle the selection of a rating
  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  // Render the star icons based on the selected rating
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} onClick={()=>handleRatingClick(i)}
          style={{cursor:'pointer',color:i<=rating? 'yellow':'gray',}}
        >
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div>
      <h1>Discussion Board</h1>
      <form onSubmit={handleCreateDiscussion}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          placeholder="Film ID"
          value={filmId}
          onChange={(e) => setFilmId(e.target.value)}
        />
        <div>
          <label>Rating: </label>
          {renderStars()} 
        </div>
        <button type="submit">Create Discussion</button>
      </form>
      <h2>Discussions</h2>
      <ul>
        {discussions.map((discussion) => (
          <li key={discussion.id}>
            <h3>{discussion.title}</h3>
            <p>{discussion.body}</p>
            <p>Film ID: {discussion.film_id}</p>
            <p>Rating: {discussion.film_rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discussion;