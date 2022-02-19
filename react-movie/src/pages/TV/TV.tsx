import React, { useEffect, useState } from "react";
import { Hero, Slider } from "../../components";
import { TvListResult } from "../../utils/types";
import { popular } from "./mocks/popular";

const Tv: React.FC = () => {
  const [results, setResults] = useState<TvListResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setResults(popular.results as TvListResult[]);
  }, [results])

  return (
    <div id="tv">
      <Hero results={results[0]} isLoading={isLoading} setIsLoading={setIsLoading} />
      <div className="section">
        <Slider isLoading={isLoading} />
        <Slider isLoading={isLoading} />
        <Slider isLoading={isLoading} />
        <Slider isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Tv;
