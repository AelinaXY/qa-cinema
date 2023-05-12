import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import FilledScreening from "./screenings/FilledScreening";
import axios from "axios";

const Screenings = () => {
  const { film } = useParams("");

  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const loaded = useRef(false);

  const request = ((url, setFunction) =>
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
        setFunction(response.data);
      })
      .catch((error) => {
        setError(error);
      });

  })

  useEffect(() =>
  {
    if (loaded.current === false){
      request("http://localhost:8080/films/",setData);
      loaded.current = true
    }

  },[]);


  if (loaded) {
    console.log("68890");
    if (error !== "") {
      console.log(error);
    } else if (data !== "") {
      console.log(data);
      return <FilledScreening films={data} selectedFilm={film}/>;

    }
  } else{
    console.log("68891");
  }

  return <h2>{film}</h2>;
};

export default Screenings;
