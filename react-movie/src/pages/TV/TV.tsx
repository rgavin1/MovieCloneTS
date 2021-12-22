import React from "react";
import { Hero, Slider } from "../../components";

const Tv: React.FC = () => {
  return (
    <div id="tv">
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

export default Tv;
