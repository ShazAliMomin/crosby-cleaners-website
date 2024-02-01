import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
// import CrosbyCleanersLogo from "../../images/Logos/Logo-Blue.png";
import CrosbyCleanersLogo from "../../images/Logos/Logo-sm-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isExpanded, setExpand] = useState(false);

  function handleClick() {
    setExpand(!isExpanded);
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <nav>
      <Link to="/" onClick={scrollToTop}>
        <img className="logo" src={CrosbyCleanersLogo} alt=""></img>
      </Link>
      <div className="nav-tab" onClick={handleClick}>
        <FontAwesomeIcon icon={isExpanded ? faX : faBars} />
      </div>
      <ol className={isExpanded ? "navigation" : ""}>
        <li>
          <NavLink to="/" onClick={isExpanded ? handleClick : null}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={isExpanded ? handleClick : null}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={isExpanded ? handleClick : null}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/location" onClick={isExpanded ? handleClick : null}>
            Location
          </NavLink>
        </li>
        <li id="coupon-btn" onClick={isExpanded ? handleClick : null}>
          <NavLink to="/coupon">Coupons</NavLink>
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;
