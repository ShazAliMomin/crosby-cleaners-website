import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import CrosbyCleanersLogo from "../../images/Logos/Logo-Blue.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isExpanded, setExpand] = useState(false);

  function handleClick() {
    setExpand(!isExpanded);
  }

  return (
    <nav>
      <Link to="/home">
        <img className="logo" src={CrosbyCleanersLogo} alt=""></img>
      </Link>
      <div className="nav-tab" onClick={handleClick}>
        <FontAwesomeIcon icon={isExpanded ? faX : faBars} />
      </div>
      <ul className={isExpanded ? "navigation" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/location">Location</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
