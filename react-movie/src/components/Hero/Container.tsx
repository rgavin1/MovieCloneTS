import React from "react";
import { Hero } from "../../utils/types";
import Description from "./Description";

const Container: React.FC<Hero> = ({ results, isLoading }) => {
  return (
    <div
      id="hero"
      style={{
        backgroundImage: isLoading
          ? "none"
          : `url(https://image.tmdb.org/t/p/original${results?.backdrop_path})`,
      }}
    >
      <Description results={results} isLoading={isLoading} />
    </div>
  );
};

export default Container;