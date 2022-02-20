import React, { useState, useEffect } from "react";
import { Hero, Slider } from "../../components";
import useFeatureAllWeekly from "../../hooks/Services/Fetch/Feature/useFeatureAllWeekly";
import { utils } from "../../utils";
import { Feature } from "../../utils/types";

const Home: React.FC = () => {
  const { loading, data } = useFeatureAllWeekly();

  const [results, setResults] = useState<Feature>();

  useEffect(() => {
    const feature = utils.selectRandomFeature(data);
    setResults(feature);
  }, [data]);

  return (
    <div id="home">
      <Hero results={results} isLoading={loading} />
      <div className="section">
        <Slider name="TITLE" isLoading={loading} />
        <Slider isLoading={loading} />
        <Slider isLoading={loading} />
        <Slider isLoading={loading} />
        <Slider isLoading={loading} />
      </div>
    </div>
  );
};

export default Home;
