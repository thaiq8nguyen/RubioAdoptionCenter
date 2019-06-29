import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="pet-adoption">Rubio's Adoption Center</h1>
      <Pet name="Bobby" animal="Dog" breed="Boo" />
      <Pet name="Megan" animal="Dog" breed="Mixed" />
      <Pet name="Annie" animal="Cat" breed="White" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
