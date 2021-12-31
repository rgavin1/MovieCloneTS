import React, { useEffect, useState } from "react";
import { Hero, Slider } from "../../components";
import { RawResults } from "../../utils/types";
import { popular } from "./mocks/popular";

const Tv: React.FC = () => {
  const [results, setResults] = useState<RawResults>()

  useEffect(() => {
    setResults(popular);
  }, [results])

  return (
    <div id="tv">
      <Hero results={results} />
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
