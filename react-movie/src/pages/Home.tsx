/**
 * Things to Do
 * - [x] Print the Selected Feature and Content
 * - [ ] Update the Favicon and Tab Name
 * - [ ] Create a function for loading a random feature
 * - [x] Create a Hero Image
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
import { CircularProgress } from "@material-ui/core";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [feature, setFeature] = useState<Feature>(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      resquestTrendingMedia(MediaTypes.ALL)
        .then((res) => res.json())
        .then((data) => {
          setFeature(selectedFeature(data.results));
        })
        .catch((err) => {
          console.warn(err);
          setIsLoading(false);
        });

      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <HeroContext.Provider value={feature}>
          <Hero />
        </HeroContext.Provider>
      )}
    </>
  );
};

export default Home;
