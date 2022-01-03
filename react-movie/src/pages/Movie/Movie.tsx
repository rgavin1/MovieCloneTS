import React, { useEffect, useState } from "react";
import { Hero, Slider } from "../../components";
import { popular } from "./mocks/popular";
import { RawResults } from "../../utils/types";

const Movie: React.FC = () => {
  const [results, setResults] = useState<RawResults>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setResults(popular);
  }, [results])

  return (
    <div id="movie">
      <Hero results={results} isLoading={isLoading} setIsLoading={setIsLoading} />
      <div className="section">
        <Slider name="Popular" isLoading={isLoading} />
        <Slider isLoading={isLoading} />
        <Slider isLoading={isLoading} />
        <Slider isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Movie;
