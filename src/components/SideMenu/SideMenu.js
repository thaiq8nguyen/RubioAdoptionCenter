import React from "react";
import NavBar from "../NavBar/NavBar";

import "./SideMenu.less";

const SideMenu = ({ toggle }) => {
  console.log("From side menu: ", toggle);

  return (
    <div className={toggle ? "side-menu slide-out" : "side-menu"}>
      <NavBar />
    </div>
  );
};

export default SideMenu;
