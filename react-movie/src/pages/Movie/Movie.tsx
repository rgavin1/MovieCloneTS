import React, { useEffect, useState } from "react";
import { Hero, Slider } from "../../components";
import { Feature } from "../../utils/types";
import useFeatureMovieWeekly from "../../hooks/Services/Fetch/Feature/useFeatureAllWeekly";
import { utils } from "../../utils";

const Movie: React.FC = () => {
  const { loading, data } = useFeatureMovieWeekly();

  const [results, setResults] = useState<Feature>();

  useEffect(() => {
    const feature = utils.selectRandomFeature(data);
    setResults(feature);
  }, [data]);


  return (
    <div id="movie">
      <Hero results={results} isLoading={loading} />
      <div className="section">
        <Slider name="Popular" isLoading={loading} />
        <Slider isLoading={loading} />
        <Slider isLoading={loading} />
        <Slider isLoading={loading} />
      </div>
    </div>
  );
};

export default Movie;
