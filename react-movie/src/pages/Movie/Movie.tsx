import React, { useEffect, useState } from "react";
import { Hero, Slider } from "../../components";
import { popular } from "./mocks/popular";
import { RawResults } from "../../utils/types";

const Movie: React.FC = () => {
  const [results, setResults] = useState<RawResults>()

  useEffect(() => {
    setResults(popular);
  }, [results])

  return (
    <div id="movie">
      <Hero results={results} />
      <div className="section">
        <Slider name="Popular" />
        <Slider />
        <Slider />
        <Slider />
      </div>
    </div>
  );
};

export default Movie;
