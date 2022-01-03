import React, { useEffect, useState } from "react";
import { Hero, Slider } from "../../components";
import { RawResults } from "../../utils/types";
import { popular } from "./mocks/popular";

const Tv: React.FC = () => {
  const [results, setResults] = useState<RawResults>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setResults(popular);
  }, [results])

  return (
    <div id="tv">
      <Hero results={results} isLoading={isLoading} setIsLoading={setIsLoading} />
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
