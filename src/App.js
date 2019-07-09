import React, { useEffect } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import API from "./utils/API";

import "bulma/css/bulma.css";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import Donate from "./views/Donate";
import Shop from "./views/Shop";
import About from "./views/About";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faDonate,
  faStore,
  faCalendarDay,
  faUsers,
  faPaw,
  faChevronCircleRight,
  faThumbsUp,
  faTimesCircle,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faDonate,
  faStore,
  faCalendarDay,
  faUsers,
  faPaw,
  faChevronCircleRight,
  faThumbsUp,
  faTimesCircle,
  faSpinner
);

const App = () => {
  useEffect(() => {
    API.getAuthenticated();
  }, []);
  return (
    <div className="app">
      <Header />

      <Router>
        <Home path="/" />

        <Donate path="/donate" />
        <Shop path="/shop" />
        <About path="/about" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
