import React, { useState, useEffect } from "react";
import { Hero, Slider } from "../../components";
import { itemData } from "../../components/Slider/Container";
import { RawResults } from "../../utils/types";


const Home: React.FC = () => {
  const [results, setResults] = useState<RawResults>()

  useEffect(() => {
    setResults(itemData)
  }, [results])

  return (
    <div id="home">
      <Hero results={results} />
      <div className="section">
        <Slider name="TITLE" />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </div>
    </div>
  );
};

export default Home;
