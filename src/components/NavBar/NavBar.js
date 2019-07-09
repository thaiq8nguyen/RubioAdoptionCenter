import React, { useState } from "react";
import { Link } from "@reach/router";
import styles from "./NavBar.less";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoURL from "../../assets/images/adoptapet_logo.png";

const NavBar = () => {
  const [navMenu, toggleNavMenu] = useState(false);

  const toggle = () => {
    toggleNavMenu(!navMenu);
  };

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {/* <img src={logoURL} alt="adoptapet logo" className="navbar-item" /> */}
        {/* <h1 className="navbar-item">Adopt A Pet</h1> */}

        <Link to="/" className="navbar-item is-size-4">
          <img src={logoURL} alt="" />
          <span className="is-pulled-right">Adopt A Pet</span>
        </Link>

        <a
          href="#"
          aria-label="menu"
          aria-expanded="false"
          role="button"
          className={navMenu ? "navbar-burger is-active" : "navbar-burger"}
          onClick={toggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        className={navMenu ? "navbar-menu is-active" : "navbar-menu"}
        id="navbarBasicExample"
      >
        <div className="navbar-end">
          <Link to="/donate" className="navbar-item is-size-4">
            <FontAwesomeIcon icon="donate" size="1x" />
            <span className={styles.linkText}>Donate</span>
          </Link>
          <Link to="/shop" className="navbar-item is-size-4">
            <FontAwesomeIcon icon="store" size="1x" />
            <span className={styles.linkText}>Shop</span>
          </Link>
          <Link to="/about" className="navbar-item is-size-4">
            <FontAwesomeIcon icon="paw" size="1x" />
            <span className={styles.linkText}>About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
