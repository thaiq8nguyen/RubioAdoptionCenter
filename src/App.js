import React from "react";
import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
// import SideMenu from "./components/SideMenu/SideMenu";

import "./assets/styles/app.less";

library.add(faBars);

//mport Pet from "./Pet";
//import SearchParams from "./SearchParams";

const App = () => {
  return (
    // <div>
    //   <h1 id="pet-adoption">Rubios Adoption Center</h1>
    //   {/* <SearchParams /> */}
    // </div>

    <div className="container">
      <Header />
    </div>
  );
};

render(<App />, document.getElementById("root"));
