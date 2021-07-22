import React from "react";

// API
import { trendingMedia, MediaTypes } from "../api/API";

const Home: React.FC = () => {
  trendingMedia(MediaTypes.ALL);

  return <div>Home</div>;
};

export default Home;
