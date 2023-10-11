import React from "react";
import "./Home.css";
import IntroImg from "../../images/Laundry-clipart-image.jpeg";

function Home() {
  return (
    <section className="home">
      <div className="intro">
        <div className="intro-left">
          <h1>
            <span>Same Day</span> Dry Cleaning and Laundry Services
          </h1>
          <button>Learn More</button>
        </div>
        <img src={IntroImg} alt="Clip art of dry cleaners"></img>
      </div>
    </section>
  );
}

export default Home;
