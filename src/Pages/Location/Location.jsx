import React from "react";
import "./Location.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const location = {
  address: "14045 FM 2100 Suite 140, Crosby, TX",
  lat: 29.893198631619864,
  lng: -95.06347417044317,
};

function Location() {
  return (
    <section className="location">
      <h1>Our Location</h1>
      <div className="location-info">
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>14045 FM 2100 Suite 140, Crosby, TX 77532</p>
        </div>

        <div className="phone">
          <FontAwesomeIcon icon={faPhone} />
          <p>(281) 328-1519</p>
        </div>

        <div className="open-times">
          <div>
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="times">
            <p>
              Sunday: <span className="time-details">Closed</span>
            </p>
            <p>
              Monday: <span className="time-details">6:30am - 7:00pm</span>
            </p>
            <p>
              Tuesday: <span className="time-details">6:30am - 7:00pm</span>{" "}
            </p>
            <p>
              Wednesday: <span className="time-details">6:30am - 7:00pm</span>
            </p>
            <p>
              Thursday: <span className="time-details">6:30am - 7:00pm</span>
            </p>
            <p>
              Friday: <span className="time-details">6:30am - 7:00pm</span>
            </p>
            <p>
              Saturday: <span className="time-details">7:00am - 4:00pm</span>
            </p>
          </div>
        </div>
      </div>

      <div className="map"></div>
    </section>
  );
}

export default Location;
