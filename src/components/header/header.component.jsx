import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../../assets/img/logo/logo.png";
import "./header.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faRssSquare,
  faLevelUpAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faProductHunt } from "@fortawesome/free-brands-svg-icons";

const Header = ({ location: { pathname } }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header ${menuActive ? "open" : ""}`}>
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-nav">
          <ul className={`nav-list ${menuActive ? "open" : ""}`}>
            <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
              <FontAwesomeIcon icon={faHome} />
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/about" ? "active" : ""}`}>
              <FontAwesomeIcon icon={faUser} />
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li
              className={`nav-item ${pathname === "/skills" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faLevelUpAlt} />
              <Link to="/skills" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li
              className={`nav-item ${pathname === "/project" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faProductHunt} />
              <Link to="/project" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li
              className={`nav-item ${pathname === "/contact" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/blog" ? "active" : ""}`}>
              <FontAwesomeIcon icon={faRssSquare} />
              <Link to="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
          </ul>

          <div
            className={`mobile-btn ${menuActive ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);
