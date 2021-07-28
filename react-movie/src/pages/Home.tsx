/**
 * Things to Do
 * - [ ] Print the Selected Feature and Content
 * - [ ] Update the Favicon and Tab Name
 * - [ ] Create a function for loading a random feature
 * - [ ] Create a Hero Image
 * - [ ] Create a Provider for the Hero Image
 * - [ ] Adding Components
 */

import React, { useState, useEffect } from "react";

// Appication Components
import { Hero } from "../components";
import { HeroContext } from "../useContext";

// API
import { resquestTrendingMedia, MediaTypes, Feature } from "../api/API";
import { selectedFeature } from "../utils";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [feature, setFeature] = useState<Feature>(null);

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

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <HeroContext.Provider value={feature}>
          <Hero />
        </HeroContext.Provider>
      )}
    </>
  );
};

export default Home;
