import React from "react";
import "./Values.css";

import Card from "../../../../components/Card/Card";
import {
  faForwardFast,
  faHandshake,
  faSoap,
} from "@fortawesome/free-solid-svg-icons";

const values = [
  {
    header: "Same Day Pick-Up",
    paragraph:
      "We offer same day pick-up for most items whether they are dry cleaned or put in laundry.",
  },
  {
    header: "Customer Trust",
    paragraph:
      "We value the trust we have built with our customers as a result of our quality customer service.",
  },
  {
    header: "Quality Cleaning",
    paragraph:
      "We pride ourselves on our ability to consistently deliver quality cleaning to our customers.",
  },
];

function Values() {
  return (
    <div className="values">
      <div className="values-container">
        <h2>Providing Quality Customer Service Since 1997 </h2>
        <div className="value-cards">
          <Card icon={faForwardFast} values={values[0]} />
          <Card icon={faHandshake} values={values[1]} />
          <Card icon={faSoap} values={values[2]} />
        </div>
      </div>
    </div>
  );
}

export default Values;
