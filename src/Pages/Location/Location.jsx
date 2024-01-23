import React from "react";
import "./Location.css";

import GoogleMapImg from "../../images/CrosbyLocation.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Location() {
  return (
    <section className="location">
      <h1>Our Location</h1>
      <div className="location-container">
        <div className="location-info">
          <div className="address">
            <FontAwesomeIcon className="contact-icon" icon={faLocationDot} />
            <p>14045 FM 2100 Suite 140, Crosby, TX 77532</p>
          </div>

          <div className="phone">
            <FontAwesomeIcon className="contact-icon" icon={faPhone} />
            <p>(281) 328-1519</p>
          </div>

          <div className="open-times">
            <div>
              <FontAwesomeIcon className="contact-icon" icon={faClock} />
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

        {/* <div className="map"> */}
        <img
          className="google-img"
          src={GoogleMapImg}
          alt="Crosby Location on Google Maps"
        />
        {/* </div> */}
      </div>
    </section>
  );
}

export default Location;
