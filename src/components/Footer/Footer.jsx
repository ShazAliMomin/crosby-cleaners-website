import React from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

import CrosbyCleanersLogo from "../../images/Logos/Logo-sm-3.png";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="left-footer">
          <Link to="/" onClick={handleClick}>
            <img className="logo" src={CrosbyCleanersLogo} alt=""></img>
          </Link>
          <ul className="footer-nav">
            <li>
              <NavLink to="/" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleClick}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleClick}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/location" onClick={handleClick}>
                Location
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-footer">
          <p>(281) 328-1519</p>
          <p>
            14045 FM 2100 Suite 140, <br></br>Crosby, TX 77532
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
