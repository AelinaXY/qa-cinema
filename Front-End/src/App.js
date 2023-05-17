import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Screenings from "./components/Screenings";
import Discussion from "./components/Discussion";
import Contact from "./components/Contact";
import Nav1 from "./components/Nav1";
import Footer2 from "./components/Footer2";
import ThankYou from "./components/ThankYou";
import Ratings from "./components/Ratings";
import Map from "./components/Map";
import TheTeam from "./components/TheTeam";



import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import { Switch, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav1 />
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/screenings/:film">
          <Screenings />
        </Route>
        <Route path="/screenings" exact>
          <Screenings />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/discussion">
          <Discussion />
        </Route>
        <Route path="/thankyou">
          <ThankYou />
        </Route>
        <Route path="/ratings">
          <Ratings />
        </Route>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/theteam">
          <TheTeam />
        </Route>
      </BrowserRouter>

      <Footer2 />
    </>
  );
}

export default App;
