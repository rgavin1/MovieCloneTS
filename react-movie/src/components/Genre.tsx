import React from "react";
import { genres } from "../api/API";

const Genre: React.FC<{ ids: number[] }> = ({ ids }) => {
  return (
    <ul>
      {ids.map((termid) => {
        const term = genres.find((genre) => genre.id === termid);
        return <li>{term?.name}</li>;
      })}
    </ul>
  );
};

export default Genre;
