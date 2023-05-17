import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Alert from "react-bootstrap/Alert";
import './Discussion.css';

const Discussion = () => {
  const [discussions, setDiscussions] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [filmId, setFilmId] = useState('');
  const [rating, setRating] = useState(0);


  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  const fetchDiscussions = () => {
    axios
      .get('http://localhost:8080/discussionBoard', config)
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
      .post('http://localhost:8080/discussionBoard', {
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
// Carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
  return (
    <div>
      <h1 className='discussionPage'><span>Discussion</span></h1>{""}

      <Alert className='discussionPage'>
              {" "}
              <p>
              This is the place for you to talk about the films you watched with us.Please remember that this space is moderated.Posts with spoilers or any form of abusive language will result in the post being removed
              </p>
              </Alert>

      <form onSubmit={handleCreateDiscussion}>
        <input
          type="text"
          placeholder="Film Title:"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your opinion here:"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your QA experience here:"
          value={filmId}
          onChange={(e) => setFilmId(e.target.value)}
        />
        <div>
          <label className='discussionPage'>Rate the film: </label>
          {renderStars()} 
        </div>
        <button type="submit">Create post</button>
      </form>
      <h2 className='discussionPage' >What our viewers have said so far...</h2>
      <ul>
        {discussions.map((discussion) => (
          <li class className='discussionPage'key={discussion.id}>
            <h3 className='discussionPage'>  {discussion.title}</h3>
            <p>{discussion.body}</p>
            <p>Overall Experience:{discussion.film_id}</p>
            <p>Rating:{discussion.film_rating}</p>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default Discussion;