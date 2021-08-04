import React from "react";

import { Slider } from "./index";

const Body: React.FC = () => {
  return (
    <div
      className="body-container"
      style={{ position: "relative", top: "-150px" }}
    >
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </div>
  );
};

export default Body;
