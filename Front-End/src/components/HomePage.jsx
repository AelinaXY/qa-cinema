import { useEffect, useRef, useState } from "react";
import axios from "axios";
import filledHomePageReturn from "./homepage/filledHomePageReturn";
import shuffle from "./functions/shuffle";

const HomePage = () => {
  const [data, setData] = useState("");
  const [newReleaseData,setNewReleaseData] = useState("");
  const [error, setError] = useState("");
  const loaded = useRef(false);

  const request = ((url, setFunction) =>
  {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    
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
      request("http://localhost:8080/films/new-releases", setNewReleaseData);
      request("http://localhost:8080/films/",setData);
      loaded.current = true
    }

  },[]);


  if (loaded) {
    
    if (error !== "") {
      
    } else if (data !== "" && newReleaseData !== "") {
      
      
      return filledHomePageReturn(shuffle(data),shuffle(newReleaseData));

    }
  } else{
    
  }
};

export default HomePage;
