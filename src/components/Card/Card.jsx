import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ icon, values }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="card-container">
      <FontAwesomeIcon icon={icon} className="icon" />
      <h3>{values.header}</h3>
      <p>{values.paragraph}</p>
      <NavLink to="/about" onClick={handleClick} className="card-link">
        Learn More
      </NavLink>
    </div>
  );
}

export default Card;
