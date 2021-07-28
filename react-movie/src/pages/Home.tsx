/**
 * Things to Do
 * - [ ] Print the Selected Feature and Content
 * - [ ] Update the Favicon and Tab Name
 * - [ ] Create a function for loading a random feature
 * - [ ] Adding Components
 */

import React, { useState } from "react";
import { useEffect } from "react";

// API
import { resquestTrendingMedia, MediaTypes } from "../api/API";
import { selectedFeature } from "../utils";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [feature, setFeature] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      resquestTrendingMedia(MediaTypes.ALL)
        .then((res) => res.json())
        .then((data) => {
          setFeature(selectedFeature(data.results));
        });

      setLoading(false);
    }, 5000);
  }, []);

  console.log("feature ", feature);

  return <>{loading ? <h1>Loading...</h1> : <>List</>}</>;
};

export default Home;
