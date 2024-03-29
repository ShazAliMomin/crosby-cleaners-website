import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";
import IntroImg from "../../../../images/Laundry-clipart.png";

function Hero() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-info">
          <h1>
            <span>Same Day</span> <br />
            Dry Cleaning & Laundry Services
          </h1>
          <div>
            <NavLink to="/services" onClick={handleClick}>
              Our Services
            </NavLink>
          </div>
        </div>
        <div className="hero-img">
          <img src={IntroImg} alt="Cleaners Clip art" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
