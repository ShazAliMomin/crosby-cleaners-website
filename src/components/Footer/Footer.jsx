import React from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

import CrosbyCleanersLogo from "../../images/Logos/Logo-sm-3.png";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img className="logo" src={CrosbyCleanersLogo} alt=""></img>
      </Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
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
        <li id="coupon-btn">
          <NavLink to="/coupon">Coupons</NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
