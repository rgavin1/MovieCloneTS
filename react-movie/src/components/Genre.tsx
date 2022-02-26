import React from "react";
import { GENRES_LIST } from "../helpers/constants";

const Genre: React.FC<{ genresCode?: number[] }> = ({ genresCode }) => {
  return (
    <ul id="feature-genre_list">
      {genresCode?.map((id, key) => <li key={key}>{GENRES_LIST[id]}</li>)}
    </ul>
  );
};

export default Genre;
