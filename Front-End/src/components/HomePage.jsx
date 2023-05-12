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
      request("http://localhost:8080/films/new-releases", setNewReleaseData);
      request("http://localhost:8080/films/",setData);
      loaded.current = true
    }

  },[]);


  if (loaded) {
    console.log("57890");
    if (error !== "") {
      console.log(error);
    } else if (data !== "" && newReleaseData !== "") {
      console.log(data);
      console.log(newReleaseData);
      return filledHomePageReturn(shuffle(data),shuffle(newReleaseData));

    }
  } else{
    console.log("57891");
  }
};

export default HomePage;
