/**
 * Things to Do
 * - [x] Print the Selected Feature and Content
 * - [ ] Update the Favicon and Tab Name
 * - [ ] Create a function for loading a random feature
 * - [x] Create a Hero Image
 * - [ ] Create a Provider for the Hero Image
 * - [ ] Adding Components
 */

import React from "react";

// Appication Components
import { Hero, Body } from "../../components";
import { HeroContext } from "../../hooks/useContext";

// API
// import { resquestTrendingMedia, MediaTypes, Feature } from "../../services/API";
// import { selectedFeature } from "../../utils";
import { CircularProgress } from "@material-ui/core";

const Home: React.FC = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [feature, setFeature] = useState<Feature>(null);

  // TODO: Move the services
  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     // FIXME: Please spell my name correctly
  //     resquestTrendingMedia(MediaTypes.ALL)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setFeature(selectedFeature(data.results));
  //       })
  //       .catch((err) => {
  //         console.warn(err);
  //         setIsLoading(false);
  //       });

  //     setIsLoading(false);
  //   }, 500);
  // }, []);

  return (
    <>
     <h1>Home</h1>
    </>
  );
};

export default Home;
