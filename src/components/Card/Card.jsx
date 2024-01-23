import React from "react";
import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ icon, values }) {
  return (
    <div className="card-container">
      <FontAwesomeIcon icon={icon} className="icon" />
      <h3>{values.header}</h3>
      <p>{values.paragraph}</p>
    </div>
  );
}

export default Card;
