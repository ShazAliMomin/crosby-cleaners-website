import React from "react";
import "./Home.css";

import Hero from "./Sections/Hero/Hero";
import Values from "./Sections/Values/Values";
import Reviews from "./Sections/Customer Reviews/Reviews";

function Home() {
  return (
    <section className="home">
      <Hero />
      <Values />
      <Reviews />
    </section>
  );
}

export default Home;
