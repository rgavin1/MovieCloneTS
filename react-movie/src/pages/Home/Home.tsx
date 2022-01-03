import React, { useState, useEffect } from "react";
import { Hero, Slider } from "../../components";
import { itemData } from "../../components/Slider/mock/itemData";
import { RawResults } from "../../utils/types";


const Home: React.FC = () => {
  const [results, setResults] = useState<RawResults>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setResults(itemData)
  }, [results])

  return (
    <div id="home">
      <Hero results={results} isLoading={isLoading} setIsLoading={setIsLoading} />
      <div className="section">
        <Slider name="TITLE" isLoading={isLoading} />
        <Slider isLoading={isLoading} />
        <Slider isLoading={isLoading} />
        <Slider isLoading={isLoading} />
        <Slider isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;
