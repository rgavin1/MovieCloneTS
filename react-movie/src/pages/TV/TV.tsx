import React, { useEffect, useState } from "react";
import { Hero, Slider } from "../../components";
import useFeatureTvWeekly from "../../hooks/Services/Fetch/Feature/useFeatureTvWeekly";
import { utils } from "../../utils";
import { Feature } from "../../utils/types";

const Tv: React.FC = () => {
  const { loading, data } = useFeatureTvWeekly();

  const [results, setResults] = useState<Feature>();

  useEffect(() => {
    const feature = utils.selectRandomFeature(data);
    setResults(feature);
  }, [data]);

  return (
    <div id="tv">
      <Hero results={results} isLoading={loading} />
      <div className="section">
        <Slider isLoading={loading} />
        <Slider isLoading={loading} />
        <Slider isLoading={loading} />
        <Slider isLoading={loading} />
      </div>
    </div>
  );
};

export default Tv;
