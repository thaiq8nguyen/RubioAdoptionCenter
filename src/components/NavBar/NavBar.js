import React from "react";

import "./NavBar.less";

const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navlinks">
        <a href="http://google.com">Donate</a>
      </li>
      <li className="navlinks">
        <a href="http://google.com">Shop</a>
      </li>
      <li className="navlinks">
        <a href="http://google.com">Projects</a>
      </li>
      <li className="navlinks">
        <a href="http://google.com">Community</a>
      </li>
      <li className="navlinks">
        <a href="http://google.com">About</a>
      </li>
    </ul>
  );
};

export default NavBar;
