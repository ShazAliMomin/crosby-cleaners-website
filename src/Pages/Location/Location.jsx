import React from "react";
import "./Location.css";

// import GoogleMapImg from "../../images/CrosbyLocation.png";
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
        {/* <img
          className="google-img"
          src={GoogleMapImg}
          alt="Crosby Location on Google Maps"
        /> */}
        {/* </div> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442735.105206242!2d-95.38247339126043!3d29.89690359513055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640a94de95081a5%3A0x165e6b494b97eff8!2sCrosby%20Drycleaners%20%26%20Laundry!5e0!3m2!1sen!2sus!4v1706728203110!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Crosby Map"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
