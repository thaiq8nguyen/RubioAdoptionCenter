import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.less";

import NavBar from "../NavBar/NavBar";
import SideMenu from "../SideMenu/SideMenu";

const Header = () => {
  const [sideMenu, toggleSideMenu] = useState(false);

  function handleSideMenuClick() {
    toggleSideMenu(!sideMenu);
  }

  return (
    <header className="header">
      <div className="top-menu">
        <h1 className="heading">Rubio&apos;s Adoption Centers</h1>
        <NavBar />
        <button className="toggle-side-menu-btn" onClick={handleSideMenuClick}>
          <FontAwesomeIcon icon="bars" size="2x" />
        </button>
      </div>
      <SideMenu toggle={sideMenu} />
    </header>
  );
};

export default Header;
