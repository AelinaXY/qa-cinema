import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
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
          {" "}
          <HomePage />
        </Route>
        <Route path="about">
          {" "}
          <About />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
