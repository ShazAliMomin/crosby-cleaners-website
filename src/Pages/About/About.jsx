import React from "react";
import "./About.css";

import LaundryImg from "../../images/Laundry.png";

function About() {
  return (
    <section className="about">
      <h1>About Us</h1>
      <div className="intro-container">
        <h3>Who We Are</h3>
        <p>
          We are a family-owned Dry Cleaning and Laundry Business that has been
          providing quality services to the Crosby Community for over 25 years.
          From cleaning dirty clothes to resizing that one pant that barely
          fits, we pride ourselves on our ability to consistently deliver
          high-quality customer service. We value the long lasting relationships
          we have built with our customers over decades and only hope to
          continue that legacy.
        </p>
      </div>

      <div className="other-info">
        <h3>What We Offer</h3>
        <div>
          <div className="other-img">
            <img src={LaundryImg} alt="A washing machine" />
          </div>
          <div className="other-desc">
            <p>
              We offer a few services including dry cleaning, laundry,
              alteration and even specialized cleaning for specific items
              depending on material.
              <br></br>
              <br></br>
              Our crowning jewel, besides our customer service, is the same day
              pick-up we offer for most dry cleaning and laundry services.
              (Items are only eligable for same day pick-up if dropped off by
              8:45am)
              <br></br>
              <br></br>
              To learn more about our services click here or feel free to call
              us during open hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
