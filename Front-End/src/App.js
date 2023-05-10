import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Screenings from "./components/Screenings";
import Discussion from "./components/Discussion";
import Contact from "./components/Contact";
import Nav1 from "./components/Nav1";
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
        <Route path="/screenings">
          <Screenings />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/discussion">
          <Discussion />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
