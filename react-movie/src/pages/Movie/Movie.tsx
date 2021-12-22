import React from "react";
import { Hero, Slider } from "../../components";

const Movie: React.FC = () => {
  return (
    <div id="movie">
      <Hero />
      <div className="section">
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </div>
    </div>
  );
};

export default Movie;
