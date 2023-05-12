import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

const Screenings = () => {
  const { film } = useParams("");

  

  return <h2>{film}</h2>;
};

export default Screenings;
