import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import shuffle from "../functions/shuffle";

import { useState, useRef, useEffect } from "react";
import axios from "axios";


const FilledScreening = ({films, selectedFilm}) => {

    // const [selectedFilmId, setSelectedFilmId] = useState(0);
    console.log("IN FILLED SCREENING PAGE");
    console.log(films);
    console.log(selectedFilm);


    //Find Film ID
    let selectedFilmId = null;

    for(let i = 0; i<films.length; i++){

        if (films[i].film_title.replace(/\s+/g, '') === selectedFilm){
            selectedFilmId = films[i].id;
        }
    }


    //Get All Showings
    let showingData = {};
    const [error, setError] = useState("");
    const loaded = useRef(false);

    const request = ((url, setFunction, filmTitle, filmId) =>
    {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
      console.log(`making request for at ${url}`);
      axios
        .get(url, config)
        .then((response) => {
          setFunction(response.data, filmTitle, filmId);
        })
        .catch((error) => {
          setError(error);
        });

    })

    const pushData = (dataToBePushed,filmTitle,filmId) =>
    {
      showingData.title = filmTitle;
      showingData.id = filmId;
      showingData.showings = dataToBePushed;
    }

    useEffect(() =>
    {
      if (loaded.current === false){
        for(let i = 0; i<films.length; i++)
        {
          request(`http://localhost:8080/showings/film/${films[i].id}`,pushData);
        }
        
        loaded.current = true
      }

    },[]);


    if (loaded) {
      console.log("68890");
      if (error !== "") {
        console.log(error);
      } else if (showingData !== "") {
        console.log(showingData);
        return (
          <>
          <h2>{selectedFilmId}</h2>
          </>
        );

      }
    } else{
      console.log("68891");
    }
};

export default FilledScreening;
