import React from "react";
import { render } from "react-dom";
//mport Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="pet-adoption">Rubios Adoption Center</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
